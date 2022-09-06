import { Numbers } from "./Numbers";


export class SortData {
    constructor(public data: Numbers) {}

    sort(): void {
        const {length}=this.data;

        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length-i-1; j++) {
                if (this.data[j] > this.data[j+i]) {
                    const temp=this.data[j];
                    this.data[j] = this.data[j+1];
                    this.data[j+1]=temp;
                }

                // String
                if(typeof this.data === 'string'){
                    
                }
            }
        }
    }
}