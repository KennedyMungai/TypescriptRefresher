"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SortData = void 0;
class SortData {
    constructor(data) {
        this.data = data;
    }
    sort() {
        const { length } = this.data;
        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length - i - 1; j++) {
                if (this.data[j] > this.data[j + i]) {
                    const temp = this.data[j];
                    this.data[j] = this.data[j + 1];
                    this.data[j + 1] = temp;
                }
                // String
                if (typeof this.data === 'string') {
                }
            }
        }
    }
}
exports.SortData = SortData;
