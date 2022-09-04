import { faker } from "@faker-js/faker";
import { Entity } from './TrackingMap';


export class Destination implements Entity{
    constructor() {
        this.receiver=faker.name.firstName()
        this.location={
            lat: +faker.address.latitude(),
            lon: +faker.address.longitude()
        }
    }
    
    receiver: string
    location: {
        lat: number,
        lon: number
    }

    popupText():string {
        return `
            <h3>Receiver Name: ${this.receiver}</h3>
        `
    }
}