const multiply = (x:number, y:number): number => {
    return x*y
}

console.log(multiply(8,4))

function sum(x:number, y:number): number {
    return x+y
}


const printer = (content:string): void => {
    console.log(content)
}


const throwError = (content: string): never => {
    throw new Error(content)
}


const earthquake = {
    date: new Date(),
    velocity: 4.5
}


const logVelocity = ({date, velocity}:{date: Date; velocity: number}):void => 
{
    console.log(date)
    console.log(velocity)
}

logVelocity(earthquake)


// // ES2015 syntax
// const logVelocity2 = ({date, velocity}) => {
//     console.log(earthquake.date)
//     console.log(earthquake.velocity)
// }