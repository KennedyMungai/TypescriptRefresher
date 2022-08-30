// let age: number = 3

// let first_name:string = "Genghis Khan"
// let is_married:boolean=false

// let no_value:null=null
// let not_assigned:undefined=undefined

// let today: Date=new Date(2022, 08, 30)


// let planets:string[] = ['mercury', 'venus', 'earth', 'mars', 'jupiter', 'saturn', 'uranus', 'neptune', 'pluto']


// // Classes
// class Phone {

// }

// let phone1: Phone = new Phone()


// // Object Literals
// let product : {name:string,price:number} = {
//     name:'pen',
//     price: 15
// }


// // Functions
// const printer: (content:string) => void = (content:string) => {
//     console.log(content)
// }


// Functions that return the 'any' type
const place='{"lat":45, "lon":-70}'
const newLocation=JSON.parse(place)
console.log(newLocation)