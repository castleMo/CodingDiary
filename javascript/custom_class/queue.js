class Queue {
    constructor() {
        this.storage = {};
        this.firstIndex = 0;
        this.lastIndex = 0;
    }

    size() {
        if(this.storage[this.lastIndex] === undefined) {
            return 0;
        } else {
            return this.lastIndex - this.firstIndex + 1;
        }
    }

    add(value) {
        if(this.size() === 0) {
            this.storage[this.lastIndex] = value;
        } else {
            this.lastIndex++;
            this.storage[this.lastIndex] = value;
        }
    }

    popLeft() {
        let temp;

        if(this.firstIndex === this.lastIndex) {
            temp = this.storage[this.firstIndex];
            delete this.storage[this.firstIndex];
            this.firstIndex = 0;
            this.lastIndex = 0;
        } else {
            temp = this.storage[this.firstIndex];
            delete this.storage[this.firstIndex];
            this.firstIndex++;
        }

        return temp;
    }
}