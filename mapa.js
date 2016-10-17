var mymap = L.map('mapid').setView([-15.62, -100.46], 3);

L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>',
    maxZoom: 6
}).addTo(mymap);

L.control.scale().addTo(mymap);

var marker = L.marker([14.9100, -92.2650]).addTo(mymap);
marker.bindPopup("<b>Mario Garcia</b><br />Tapachula, México");

var marker = L.marker([1.2146, -77.2789]).addTo(mymap);
marker.bindPopup("<b>Omar Chiran</b><br>Pasto, Colombia");

var marker = L.marker([4.5980478, -74.0760867]).addTo(mymap);
marker.bindPopup("<b>Eliana Urrego / Luis Felipe Castelblanco</b><br>Bogotá, Colombia");

var marker = L.marker([-38.5001, -72.0001]).addTo(mymap);
marker.bindPopup("<b>Juan Antonio Correa</b><br>Region de la Araucania, Chile");

var marker = L.marker([8.5974101, -71.1444008]).addTo(mymap);
marker.bindPopup("<b>Yermana Duque</b><br>Mérida, Venezuela");

var marker = L.marker([17.0604663, -96.7253575]).addTo(mymap);
marker.bindPopup("<b>Zulma Bolaños</b><br>Oaxaca, México"); //.openPopup();

var marker = L.marker([-34.8271, -55.9550]).addTo(mymap);
marker.bindPopup("<b>Veronica Fontt</b><br />Ciudad de la Costa, Uruguay");
