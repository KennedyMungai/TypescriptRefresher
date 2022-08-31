class Employee {
    age:number=41

    constructor(age:number) {
        this.age=age
    }

    protected startShift(): void {
        console.log('Employee start shift')
    }

    protected endShift():void {
        console.log("The shift has ended")
    }
}


class Mechanic extends Employee {
    startShift(): void {
        console.log("Mechanic has started the shift")
    }

    endShift(): void {
        console.log("Mechanic has ended the shift")
    }
}


const employee1 = new Employee(50);
const mechanic1 = new Mechanic(67);

// employee1.startShift()
// employee1.endShift()

// mechanic1.gotoWork()
// mechanic1.endShift()
console.log(mechanic1.age)