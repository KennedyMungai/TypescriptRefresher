import { Cargo } from "./Cargo"
import { Destination } from "./Destination"


const destination=new Destination()
console.log(destination)

const cargo=new Cargo()
console.log(cargo)

new google.maps.Map(document.getElementById("g-map"), {
    zoom: 1.6,
    center: {
        lat: 0,
        lng: 20
    }
})