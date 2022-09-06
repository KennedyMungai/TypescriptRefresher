"use strict";
class SortData {
    constructor(data) {
        this.data = data;
    }
    sort() {
        const { length } = this.data;
        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length - i - 1; j++) {
                // An array of numbers
                if (this.data instanceof Array) {
                    if (this.data[j] > this.data[j + i]) {
                        const temp = this.data[j];
                        this.data[j] = this.data[j + 1];
                        this.data[j + 1] = temp;
                    }
                }
                // String
                if (typeof this.data === 'string') {
                }
            }
        }
    }
}
