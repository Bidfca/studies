public class BubbleSort {
    public static void main(String[] args) {
        int[] vet = { 8, 9, 3, 5, 1 };
        int aux = 0;

        for (int i = 0; i < 5; i++) {
            for (int j = 0; j < 4; j++) {
                if (vet[j] > vet[j + 1]) {
                    aux = vet[j];
                    vet[j] = vet[j + 1];
                    vet[j + 1] = aux;
                }
            }
        }

        for (int i = 0; i < 5; i++) {
            System.out.println(" " + vet[i]);
        }
    }
}