import javax.swing.JOptionPane;

public class Media {
    public static void main(String args[]) {
        int i;
        float Num[] = new float[50], media, soma = 0;
        for (i = 0; i < 50; i++) {
            Num[i] = Float.parseFloat(JOptionPane.showInputDialog("Digite um número"));
            soma = soma + Num[i];
        }
        media = soma / 50;
        System.out.println("A média das 50 notas digitadas é: " + media);
        System.exit(0);
    }
}