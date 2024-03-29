import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.util.Scanner;

public class CopiaArquivo {
	public static void main(String[] args) throws IOException {
		Scanner scanner = new Scanner(System.in);
		System.out.printf("Informe o nome do arquivo:\n");
		String caminhoArquivo = scanner.nextLine();
		InputStream is = null;
		OutputStream os = null;
		try {
			is = new FileInputStream(caminhoArquivo);
			os = new FileOutputStream("copia de" + caminhoArquivo);
			byte[] buffer = new byte[1024];
			int length = is.read(buffer);
			while (length > 0) {
				os.write(buffer, 0, length);
				length = is.read(buffer);
			}
		} catch (IOException e) {
			System.out.printf("Erro na abertura do arquivo: %s.\n", e.getMessage());
		} finally {
			is.close();
			os.close();
			scanner.close();
			System.out.printf("Arquivo copiado com sucesso.");
		}
	}
}
