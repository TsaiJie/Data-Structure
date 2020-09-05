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

    @Override
    public String toString() {
        StringBuilder res = new StringBuilder();
        res.append(String.format("Array: size = %d, capacity = %d\n", size, data.length));
        res.append('[');
        for (int i = 0; i < size; i++) {
            res.append(data[i]);
            if (i != size - 1) {
                res.append(", ");
            }
        }
        res.append(']');
        return res.toString();
    }

    /**
     * 获取index索引位置的元素
     * @param index 索引的位置
     * @return 返回的index的数据
     */
    public int get(int index){
        if (index < 0 || index >= size) {
            throw new IllegalArgumentException("Get failed. Index is illegal!");
        }
        return data[index];
    }

    /**
     * 更改index索引位置的元素
     * @param index 索引的位置
     * @param e 设置的元素
     */
    public void set(int index, int e){
        if(index < 0 || index >= size){
            throw new IllegalArgumentException("Set failed. Index is illegal!");
        }
        data[index] = e;
    }

    /**
     * 查找是否包含某个元素
     * @param e 查询的元素
     * @return 是否存在
     */
    public boolean contains(int e) {
        for (int i = 0; i < size; i ++){
            if(data[i] == e) {
                return true;
            }
        }
        return false;
    }

    /**
     * 查找是否包含某个元素 返回的是下标的索引 如果没有就返回-1
     * @param e 查询的元素
     * @return 下标索引
     */
    public int find(int e) {
        for (int i = 0; i < size; i ++){
            if(data[i] == e) {
                return i;
            }
        }
        return -1;
    }
}
