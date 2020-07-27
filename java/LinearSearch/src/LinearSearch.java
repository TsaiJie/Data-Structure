public class LinearSearch {
    private LinearSearch(){}
    public static <E> int search(E[] data, E target) {
        for (int i = 0; i < data.length; i++) {
            // == 是引用相等 equals是值相等
            if (data[i].equals(target))
                return i;
        }
        return -1;
    }


}
