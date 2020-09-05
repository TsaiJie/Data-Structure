public class Array {
    private int[] data;
    private int size;

    /**
     * 无参数的构造函数
     *
     * @param capacity 数组的容量
     */
    public Array(int capacity) {
        data = new int[capacity];
        size = 0;
    }

    // 有参数的构造函数
    public Array() {
        this(10);
    }

    // 获取数组中元素的个数
    public int getSize() {
        return size;
    }

    // 获取数组的容量
    public int getCapacity() {
        return data.length;
    }

    // 返回数组是否为空
    public boolean isEmpty() {
        return size == 0;
    }

    /**
     * 向所有的元素后添加一个元素
     *
     * @param e 添加的元素
     */
    public void addLast(int e) {
        add(size, e);
    }
    /**
     * 向所有的元素前添加一个元素
     *
     * @param e 添加的元素
     */
    public void addFirst(int e) {
        add(0, e);
    }

    /**
     * 在index位置插入一个新元素e
     *
     * @param index 插入位置的索引
     * @param e     插入的元素
     */
    public void add(int index, int e) {
        if (size == data.length) {
            throw new IllegalArgumentException("Add failed. Array is full");
        }
        // 最大就是在 最后一个元素后面插入一个元素
        if (index < 0 || index > size) {
            throw new IllegalArgumentException("Add failed. Require index >= 0 and index <= size");
        }
        for (int i = size - 1; i >= index; i--) {
            data[i + 1] = data[i];
        }
        data[index] = e;
        size++;
    }
}
