package datastructures;

import interfaces.QueueInterface;

import java.util.Stack;

public class Queue<T> implements QueueInterface<T> {

    private static final int DEFAULT_SIZE = 10;
    private Object[] data;
    private int size = 0;

    public Queue(int initialSize) {
        this.data = new Object[initialSize];
        this.size = 0;
    }

    public Queue() {
        this(10);
    }

    @Override
    public void enqueue(T element) {
        if (isFull())
            resize();

        data[size++] = element;
    }

    @Override
    public T dequeue() {
        if (isEmpty())
            System.out.println("Empty Queue !");

        T removed = (T)(data[0]);

        for (int i = 1; i < size; i++) {
            data[i-1] = data[i];
        }

        size--;
        return removed;
    }

    @Override
    public T peek() {
        if (isEmpty())
            System.out.println("Empty Queue !");

        return (T)data[0];
    }

    @Override
    public boolean isEmpty() {
        return size == 0;
    }

    @Override
    public void display() {
        if (isEmpty()) {
            System.out.println("Empty Queue !");
            return;
        }

        for (int i = 0; i < size; i++) {
            System.out.print(data[i] + " <- ");
        }
        System.out.println("END");
    }


    // Auxiliary Methods
     private boolean isFull() {
        return size == data.length;
     }

     private void resize() {
         Object[] temp = new Object[data.length * 2];

//         for (int i = 0; i < data.length; i++) {
//             temp[i] = data[i];
//         }
         System.arraycopy(data, 0, temp, 0, data.length);

         data = temp;
     }


}
