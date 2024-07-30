class Stack {
    constructor() {
        this.items = [];
    }

    // Push element onto the stack
    push(element) {
        this.items.push(element);
    }

    // Pop element from the stack
    pop() {
        if (this.isEmpty()) {
            throw new Error("Stack underflow: No elements to pop");
        }
        return this.items.pop();
    }

    // Peek at the top element of the stack
    peek() {
        if (this.isEmpty()) {
            throw new Error("Stack underflow: No elements to peek");
        }
        return this.items[this.items.length - 1];
    }

    // Check if the stack is empty
    isEmpty() {
        return this.items.length === 0;
    }

    // Get the size of the stack
    size() {
        return this.items.length;
    }

    // Clear the stack
    clear() {
        this.items = [];
    }

    // Print the stack elements
    print() {
        console.log(this.items.toString());
    }
}

// Example usage:
const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.peek()); // Output: 3
stack.pop();
console.log(stack.peek()); // Output: 2
stack.print(); // Output: 1,2
console.log(stack.size()); // Output: 2
stack.clear();
console.log(stack.isEmpty()); // Output: true
