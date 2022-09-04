import { faker } from "@faker-js/faker";
import { Entity } from './TrackingMap';


export class Cargo implements Entity{
    constructor() {
        this.trackingId=faker.datatype.uuid()
        this.location={
            lat: +faker.address.latitude(),
            lon: +faker.address.longitude()
        }
    };

    weight: number;

    trackingId: string
    location: {
        lat: number,
        lon: number
    };

    popupText():string {
        return `
            <h3>Cargo Name: ${this.trackingId}</h3>
        `
    };
}