import javax.swing.*;

class SomaSomatoria {
    public static void main(String args[]) {
        int n1, n2 = 0;
        char op;
        String mensagem;

        n1 = Integer.parseInt(JOptionPane.showInputDialog("Digite o primeiro numero"));
        n2 = Integer.parseInt(JOptionPane.showInputDialog("Digite o segundo numero"));
        op = (JOptionPane.showInputDialog("Digite 1 para soma ou 2 para somatoria")).charAt(0);

        switch (op) {
        case '1':
            if (n1 % 2 == 0 && n2 % 2 == 0) {
                mensagem = "Soma: " + (n1 + n2);
            } else {
                mensagem = "Os numeros nao sao pares";
            }
            break;
        case '2':
            int total = 0;
            for (int i = 0; i < n2; i++) {
                total += n1;
            }
            mensagem = "Somatoria: " + total;
            break;
        default:
            mensagem = "Opcao invalida";
        }

        JOptionPane.showMessageDialog(null, mensagem);

        System.exit(0);
    }
}