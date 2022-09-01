export class TrackingMap {
    constructor() {
        this.googleMap=new google.maps.Map(document.getElementById("g-map"), {
            zoom: 1.6,
            center: {
                lat: 0,
                lng: 20
            }
        })
    }

    googleMap: google.maps.Map;
}