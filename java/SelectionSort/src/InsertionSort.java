import java.lang.reflect.Array;
import java.util.Arrays;

public class InsertionSort {
    private InsertionSort() {
    }

    // arr[0...i) 是有序的， arr[i...n)  是无序的
    // 优化后的  不稳定的O(n2) 当数据有序时 就是O(n)
    public static <E extends Comparable<E>> void sort(E[] arr) {
        for (int i = 0; i < arr.length; i++) {
            // 将arr[i] 插入到合适的位置
            E t = arr[i];
            int j;
            for (j = i; j - 1 >= 0 && t.compareTo(arr[j - 1]) < 0; j--) {
                arr[j] = arr[j - 1];
            }
            arr[j] = t;
        }
    }

    // arr[0...i) 是无序的， arr[i...n)  是有序的
    public static <E extends Comparable<E>> void sort3(E[] arr) {
        for (int i = arr.length - 1; i >= 0; i--) {
            // 将arr[i] 插入到合适的位置
            E t = arr[i];
            int j;
            for (j = i; j + 1 < arr.length && t.compareTo(arr[j + 1]) > 0; j++) {
                arr[j] = arr[j + 1];
            }
            arr[j] = t;
        }
    }

    public static <E extends Comparable<E>> void sort2(E[] arr) {
        for (int i = 0; i < arr.length; i++) {
            // 将arr[i] 插入到合适的位置
//            for (int j = i; j - 1 >= 0; j--) {
//                if (arr[j].compareTo(arr[j - 1]) < 0)
//                    swap(arr, j, j - 1);
//                else
//                    break;
//            }
            for (int j = i; j - 1 >= 0 && arr[j].compareTo(arr[j - 1]) < 0; j--) {
                swap(arr, j, j - 1);
            }
        }
    }


    private static <E> void swap(E[] arr, int i, int j) {
        E t = arr[i];
        arr[i] = arr[j];
        arr[j] = t;
    }

    public static void main(String[] args) {
        int[] dataSize = {10000, 100000};
        for (int n : dataSize) {
            System.out.println("Random Array : ");
            Integer[] arr = ArrayGenerator.generateRandomArray(n, n);
            Integer[] arr2 = Arrays.copyOf(arr, arr.length);
            SortingHelper.sortTest("InsertionSort", arr);
            SortingHelper.sortTest("InsertionSort3", arr2);


//            System.out.println("Random Array : ");
//            Integer[] arr = ArrayGenerator.generateRandomArray(n, n);
//            Integer[] arr2 = Arrays.copyOf(arr, arr.length);
//            SortingHelper.sortTest("InsertionSort", arr);
//            SortingHelper.sortTest("SelectionSort", arr2);

//            System.out.println();
//            System.out.println("Ordered Array : ");
//
//            arr = ArrayGenerator.generateOrderedArray(n);
//            arr2 = Arrays.copyOf(arr, arr.length);
//            SortingHelper.sortTest("InsertionSort", arr);
//            SortingHelper.sortTest("SelectionSort", arr2);

        }

    }
}
