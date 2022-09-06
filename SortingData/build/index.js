"use strict";
class SortData {
    constructor(data) {
        this.data = data;
    }
    sort() {
        const { length } = this.data;
        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length - i - i; j++) {
            }
        }
    }
}
const dateArray = [
    new Date(2010, 4, 21),
    new Date(2001, 8, 14),
    new Date(2005, 12, 31),
    new Date(2016, 5, 3),
];
const years = dateArray.map((date) => {
    return date.getFullYear();
});
const sortData = new SortData(years);
sortData.sort();
console.log(sortData.data);
