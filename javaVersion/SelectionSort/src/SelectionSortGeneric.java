public class SelectionSortGeneric {
    private SelectionSortGeneric() {
    }

    // 对类型进行约束 必须是可以比较的
    public static <E extends Comparable<E>> void sort(E[] arr) {
        // arr[0..i) 是有序的； arr[i..n)是无序的
        for (int i = 0; i < arr.length; i++) {
            // 选择arr[i...n）中的最小值的索引
            int minIndex = i;
            for (int j = i; j < arr.length; j++) {
                if (arr[j].compareTo(arr[minIndex]) < 0)
                    minIndex = j;
            }
            swap(arr, i, minIndex);
        }
    }

    private static <E> void swap(E[] arr, int i, int j) {
        E t = arr[i];
        arr[i] = arr[j];
        arr[j] = t;
    }

    public static void main(String[] args) {
//        Integer[] arr = {1, 4, 2, 3, 6, 5};
//        SelectionSortGeneric.sort(arr);
//        for (int e : arr)
//            System.out.print(e + " ");
//        System.out.println();
//        Student[] students = {
//                new Student("A", 94),
//                new Student("B", 99),
//                new Student("C", 88)
//        };
//        SelectionSortGeneric.sort(students);
//        for (Student s : students)
//            System.out.print(s.toString() + " ");
//        System.out.println();
        int[] dataSize = {10000, 100000};
        for (int n : dataSize) {
            Integer[] arr = ArrayGenerator.generateRandomArray(n, n);
            SortingHelper.sortTest("SelectionSortGeneric", arr);
        }


    }
}
