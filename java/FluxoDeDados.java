import javax.swing.*;

class FluxoDeDados {
    public static void main(String[] args) {
        int n1, n2, potencia = 0;
        double quociente = 0;
        String mensagem = "";

        n1 = Integer.parseInt(JOptionPane.showInputDialog("Digite o primeiro numero"));
        n2 = Integer.parseInt(JOptionPane.showInputDialog("Digite o segundo numero"));

        quociente = n1 % n2;
        potencia = (int) Math.pow(n1, n2);

        mensagem = "O quociente e " + quociente + " e a potencia e " + potencia;

        JOptionPane.showMessageDialog(null, mensagem);
        System.exit(0);
    }
}