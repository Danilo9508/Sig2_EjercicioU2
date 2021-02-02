
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

    var OrangeIcon = new L.Icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-orange.png',
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

    L.marker([1.6203936308083184, -75.60425026084518], { icon: greenIcon })
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
        [1.6151793370925984, -75.61371939803746],
        [1.6154104298657246, -75.6130224609598],
        [1.6146942496888093, -75.6127901076311],
        [1.6144884718791148, -75.61352302121362]
    ], {
        color: "#CB2B3E",
        weight: 1,
        fillColor: '#CB2B3E'
    }).addTo(map);

//linea 
    L.marker([1.6094742834417415, -75.60370540672196], { icon: OrangeIcon })
        .addTo(map).bindPopup("MY HOUSE");
    var pointA = new L.latLng(1.6094742834417415, -75.60370540672196),
        pointB = new L.latLng(1.6098121238056953, -75.60362225484799)
    pointC = new L.latLng(1.6100587896225091, -75.60403531500931)
    pointD = new L.latLng(1.6126300109162681, -75.60609256928248)
    pointE = new L.latLng(1.6133512392519285, -75.60607647603688)
    pointF = new L.latLng(1.615422833817908, -75.60411242108043)
    pointG = new L.latLng(1.6188374774680445, -75.60644740739514)
    pointH = new L.latLng(1.6201101760463767, -75.60516968937087)
    pointJ = new L.latLng(1.6200837341624994, -75.60449474346811)
    pointK = new L.latLng(1.6203936308083184, -75.60425026084518);

    var latlngs = [pointA, pointB, pointC, pointD, pointE, pointF, pointG, pointH, pointJ, pointK];
    L.polyline(
        latlngs,
        { color: 'blue' }
    ).addTo(map).bindPopup('Rutas de mi casa a la Universidad de la Amazonia');



};