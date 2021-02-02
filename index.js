
window.onload = function () {
    //colors marker
    var greenIcon = new L.Icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
    });

    var BlueIcon = new L.Icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
    });

    var GoldIcon = new L.Icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-gold.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
    });
    var RedIcon = new L.Icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
    });
    //----------------------------------------------------------------------------------------------------------
    var map = L.map('map', {
        center: [1.61389, -75.6128],
        zoom: 15,
    });

    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([1.6207061254522532, -75.60429851534144], { icon: greenIcon })
        .addTo(map).bindPopup("UNIVERSIDAD DE LA AMAZONIA");

    L.marker([1.615356913151851, -75.61376868798065], { icon: BlueIcon })
        .addTo(map).bindPopup("ALCALDIA DE FLORENCIA");

    L.circle([1.615356913151851, -75.61376868798065], {
        color: '#3274A3',
        fillColor: '#3274A3',
        fillOpacity: 0.5,
        radius: 500
    }
    ).addTo(map);

    L.marker([1.6150657252054776, -75.61330759274283], { icon: RedIcon })
        .addTo(map).bindPopup("PARQUE PRINCIPAL SANTANDER");

    L.polygon([
        [1.615182262098286, -75.61373622490643],
        [1.615424868512577, -75.61301067300026],
        [1.6146909729604517, -75.6127848198123],
        [1.6144865357232334, -75.61352309780847]
    ], {
        color: "#CB2B3E",
        weight: 1,
        fillColor: '#CB2B3E'
    })
        .addTo(map)



};