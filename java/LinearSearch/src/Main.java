public class Main {
    public static void main(String[] args) {
        int[] dataSize = {1000000, 10000000};

        for (int n : dataSize) {
            Integer[] data = ArrayGenerator.generateOrderedArray(n);
            long startTime = System.nanoTime();
            for (int k = 0; k < 100; k++)
                LinearSearch.search(data, n);
            long endTime = System.nanoTime();
            double time = (endTime - startTime) / 1000000000.0;
            System.out.println(time + " s");
        }


//        int res2 = LinearSearch.<Integer>search(data, 666);
//        System.out.println(res2);
//        Student[] students = {
//                new Student("cai", 12, 111),
//                new Student("tcai", 13, 112),
//                new Student("ai", 14, 113),
//        };
//        int res3 = LinearSearch.search(students, new Student("ai", 14, 113));
//        System.out.println(res3);
    }
}
