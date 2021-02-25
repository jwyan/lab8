function initMap() {
	// add your code here
	L.mapquest.key = 'fnADnAnl2FFCLABD8UYF6Iy2k1VNuh73';

	// 'map' refers to a <div> element with the ID map
	var map = L.mapquest.map('map', {
  		center: [32.88, -117.246],
  		layers: L.mapquest.tileLayer('map'),
  		zoom: 12,
		zoomControl: false
	});

	// Add a marker to the map
	L.marker([32.88, -117.23]).addTo(map);
}