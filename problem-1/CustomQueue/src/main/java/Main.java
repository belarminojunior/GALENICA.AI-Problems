import datastructures.Queue;

import java.util.Stack;

public class Main {
    static Queue<Integer> queue = new Queue<>(1);

    public static void main(String[] args) {
        System.out.println(queue.isEmpty());
        queue.enqueue(10);
        
        queue.enqueue(20);
        queue.enqueue(30);
        queue.enqueue(40);
        queue.enqueue(50);
        queue.enqueue(100);

        System.out.println("Added elements:");
        queue.display();

        System.out.println("\nRemoving item in the front: " + queue.dequeue());

        System.out.println("\nNew Queue, after removing the item:");
        queue.display();

        System.out.println("\nThe item in the front is: " + queue.peek());

        reverseQueue();
        System.out.println("\nReversed Queue:");
        queue.display();
    }

    // Reverse Queue Feature
    static void reverseQueue() {
        Stack<Integer> stack = new Stack<>();
        while (!queue.isEmpty()) {
            stack.add(queue.peek());
            queue.dequeue();
        }
        while (!stack.isEmpty()) {
            queue.enqueue(stack.peek());
            stack.pop();
        }
    }
}
