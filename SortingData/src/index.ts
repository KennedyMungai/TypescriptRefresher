class SortData {
    constructor(public data: number[]) {

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