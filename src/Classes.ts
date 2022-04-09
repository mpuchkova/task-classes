export class Counter {
    
    counter: number;

    constructor(start: number = 0) {
        this.counter = start;
    }

    increment(): number {
        return this.counter++;
    }

    decrement(): number {
        return this.counter--;
    }
}