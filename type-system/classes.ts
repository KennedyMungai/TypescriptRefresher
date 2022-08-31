class Employee {
    age:number=41

    constructor(age:number) {
        this.age=age
    }

    public startShift(): void {
        console.log('Employee start shift')
    }

    public endShift():void {
        console.log("The shift has ended")
    }
}


class Mechanic extends Employee {
    public startShift(): void {
        console.log("Mechanic has started the shift")
    }

    public endShift(): void {
        console.log("Mechanic has ended the shift")
    }

    public gotoWork():void {
        this.startShift()
    }
}


const employee1 = new Employee(50);
const mechanic1 = new Mechanic(67);

// employee1.startShift()
// employee1.endShift()

// mechanic1.gotoWork()
// mechanic1.endShift()
console.log(mechanic1.age)