class Employee {
    startShift(): void {
        console.log('Employee start shift')
    }

    endShift():void {
        console.log("The shift has ended")
    }
}


class Mechanic extends Employee {

}


const employee1 = new Employee();

employee1.startShift()
employee1.endShift()