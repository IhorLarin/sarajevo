// Определяем переменную map
var map;

// Функция initMap которая отрисует карту на странице
function initMap() {

	// В переменной map создаем объект карты GoogleMaps и вешаем эту переменную на <div id="map"></div>
	
	
	map = new google.maps.Map(document.getElementById('map'), {
		// При создании объекта карты необходимо указать его свойства
		// center - определяем точку на которой карта будет центрироваться
		center: {
			lat: 49.869951,
			lng: 23.954900
		},
		// zoom - определяет масштаб. 0 - видно всю платнеу. 18 - видно дома и улицы города.
		zoom: 17,
		
		scrollwheel: false,
		
		zoomControl: false,
		mapTypeControl: false,
		scaleControl: false,

		// Добавляем свои стили для отображения карты
		styles: [{
			"featureType": "water",
			"elementType": "all",
			"stylers": [{
				"hue": "#76aee3"
			}, {
				"saturation": 38
			}, {
				"lightness": -11
			}, {
				"visibility": "on"
			}]
		}, {
			"featureType": "road.highway",
			"elementType": "all",
			"stylers": [{
				"hue": "#8dc749"
			}, {
				"saturation": -47
			}, {
				"lightness": -17
			}, {
				"visibility": "on"
			}]
		}, {
			"featureType": "poi.park",
			"elementType": "all",
			"stylers": [{
				"hue": "#c6e3a4"
			}, {
				"saturation": 17
			}, {
				"lightness": -2
			}, {
				"visibility": "on"
			}]
		}, {
			"featureType": "road.arterial",
			"elementType": "all",
			"stylers": [{
				"hue": "#cccccc"
			}, {
				"saturation": -100
			}, {
				"lightness": 13
			}, {
				"visibility": "on"
			}]
		}, {
			"featureType": "administrative.land_parcel",
			"elementType": "all",
			"stylers": [{
				"hue": "#cccccc"
			}, {
				"saturation": 6
			}, {
				"lightness": -31
			}, {
				"visibility": "on"
			}]
		}, {
			"featureType": "road.local",
			"elementType": "all",
			"stylers": [{
				"hue": "#ffffff"
			}, {
				"saturation": -100
			}, {
				"lightness": 100
			}, {
				"visibility": "simplified"
			}]
		}, {
			"featureType": "water",
			"elementType": "all",
			"stylers": []
		}]
	});

	// Создаем маркер на карте
	var marker = new google.maps.Marker({

		// Определяем позицию маркера
		position: {
			lat: 49.869951,
			lng: 23.954900
		},

		// Указываем на какой карте он должен появится. (На странице ведь может быть больше одной карты)
		map: map,

		// Пишем название маркера - появится если навести на него курсор и немного подождать
		title: 'Наш маркер: Большой театр',

		// Укажем свою иконку для маркера
		icon: 'img/pin.png'
	});
}
