import { Cargo } from "./Cargo"
import { Destination } from "./Destination"


export class TrackingMap {
    constructor(elementId: string) {
        this.googleMap=new google.maps.Map(document.getElementById(elementId), {
            zoom: 1.6,
            center: {
                lat: 0,
                lng: 20
            }
        })
    }

    private googleMap: google.maps.Map

    attachMarker() {
        
    }
}