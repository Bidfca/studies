import javax.swing.*;

class SomatoriaProdutoria {
    public static void produtoria(int vetor[]) {
        int produtoria = 1;
        for (int i = 0; i < vetor.length; i++) {
            produtoria *= vetor[i];
        }
        JOptionPane.showMessageDialog(null, "Produtoria: " + produtoria);
    }

    public static int somatoria(int vetor[]) {
        int somatoria = 0;
        for (int i = 0; i < vetor.length; i++) {
            somatoria += vetor[i];
        }
        return somatoria;
    }

    public static void main(String args[]) {
        int vetor[] = { 1, 2, 3, 4, 5 };

        produtoria(vetor);
        JOptionPane.showMessageDialog(null, "Somatoria: " + somatoria(vetor));

        System.exit(0);
    }
}