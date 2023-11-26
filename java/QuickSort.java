// Lomuto Partition
public class QuickSort {
    public static void main(String[] args) {
        int[] vet = { 10, 7, 8, 9, 1, 5 };
        int length = vet.length;

        quickSort(vet, 0, length - 1);

        for (int i = 0; i < length; i++) {
            System.out.println(" " + vet[i]);
        }

    }

    static void quickSort(int[] arr, int low, int high) {
        if (low < high) {
            int partitionIndex = partition(arr, low, high);

            quickSort(arr, low, partitionIndex - 1);
            quickSort(arr, partitionIndex + 1, high);
        }
    }

    static int partition(int[] arr, int low, int high) {
        int pivot = arr[high];
        int i = (low - 1);

        for (int j = low; j <= high - 1; j++) {
            if (arr[j] <= pivot) {
                i++;
                swap(arr, i, j);
            }
        }

        swap(arr, i + 1, high);
        return (i + 1);
    }

    static void swap(int[] arr, int i, int j) {
        int temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

}
