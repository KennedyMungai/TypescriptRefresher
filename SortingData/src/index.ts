class SortData {
    constructor(public data: number[]) {}

    sort(): void {
        const {length}=this.data;

        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length-i-1; j++) {
                // An array of numbers
                if (this.data instanceof Array) {
                    if (this.data[j] > this.data[j+i]) {
                        const temp=this.data[j];
                        this.data[j] = this.data[j+1];
                        this.data[j+1]=temp;
                    }
                }
            }
        }
    }
}


const dateArray=[
    new Date(2010,4,21),
    new Date(2001,8,14),
    new Date(2005,12,31),
    new Date(2016,5,3),
];


const years = dateArray.map((date) => {
    return date.getFullYear();
});


const sortData = new SortData(years);
sortData.sort();
console.log(sortData.data);