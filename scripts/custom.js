var map;

var oldIcon;
  
var currentIcon;
  
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 23.7379078, lng: -38.3877419},
          zoom: 4
        });
        
        oldIcon = {
    url: '../style/images/black40.jpg',
    // This marker is 20 pixels wide by 32 pixels high.
    size: new google.maps.Size(40, 40),
    // The origin for this image is (0, 0).
    origin: new google.maps.Point(0, 0),
    // The anchor for this image is the base of the flagpole at (0, 32).
    anchor: new google.maps.Point(0, 0)
  };
  
  currentIcon = {
    url: '../style/images/curr40.jpg',
    // This marker is 20 pixels wide by 32 pixels high.
    size: new google.maps.Size(40, 40),
    // The origin for this image is (0, 0).
    origin: new google.maps.Point(0, 0),
    // The anchor for this image is the base of the flagpole at (0, 32).
    anchor: new google.maps.Point(0, 0)
  };
  
        
        refreshMap();
      }

var trail = 
      [
        {
            startTime : new Date(2016, 04, 26),
            lat:37.7450122,
            long:-25.6959568,
            title:'PDL',
            map: {
              center:{lat:23.7379078, lng: -38.3877419},
              zoom:4
            }
            
      },
      {
            startTime : new Date(2016, 04, 26),
            lat:4.6486259,
            long:-74.2478956,
            title:'Lisboa',
      },
      {
            startTime : new Date(2016, 04, 27, 07, 15),
            lat:38.7437396,
            long:-9.2302442,12,
            title:'Madrid',
      },
      {
            startTime : new Date(2016, 04, 27, 21, 00 ),
            lat:4.6486259,
            long:-74.2478956,
            title:'Bogotá',
            map: {
              center:{lat: 8.0642194, lng: -75.6622583},
              zoom:6
            }
      },
      {
            startTime : new Date(2016, 04, 28),
            lat:4.6486259,
            long:-74.2478956,
            title:'Chegada a Bogotá',
            
      },
      {
            startTime : new Date(2016, 04, 29),
            lat:4.6486259,
            long:-74.2478956,
            title:'Bogotá',
      },{
            startTime : new Date(2016, 04, 30),
            lat:4.6373867,
            long:-75.5751544,
            title:'Salento',
      },{
            startTime : new Date(2016, 04, 31),
            lat:4.6369442,
            long:-75.4903034,
            title:'Vale do Cocora',
      },
      {
            startTime : new Date(2016, 05, 01),
            lat:6.268844,
            long:-75.6664331,
            title:'Medellin',
      },
      {
            startTime : new Date(2016, 05, 02),
            lat:6.268844,
            long:-75.6664331,
            title:'Medellin',
      },
      {
            startTime : new Date(2016, 05, 03),
            lat:6.268844,
            long:-75.6664331,
            title:'Medellin e autocarro para Cartagena',
      },
      {
            startTime : new Date(2016, 05, 04),
            lat:10.4003035,
            long:-75.577856,
            title:'Cartagena',
      },
      {
            startTime : new Date(2016, 05, 05),
            lat:11.5344825,
            long:-72.932166,
            title:'Rioacha',
      },
      {
            startTime : new Date(2016, 05, 06),
            lat:12.2014341,
            long:-72.1657294,
            title:'Cabo de la Vela',
      },
      {
            startTime : new Date(2016, 05, 07),
            lat:12.4576677,
            long:-71.6700217,
            title:'Punta Gallinas',
      },
      {
            startTime : new Date(2016, 05, 08),
            lat:12.4167206,
            long:-71.7254448,
            title:'Bahia Hondita, Pusheo, Uribia, Palomino',
      },
      {
            startTime : new Date(2016, 05, 09),
            lat:11.2450534,
            long:-73.5619758,
            title:'Palomino',
      },
      {
            startTime : new Date(2016, 05, 10),
            lat:11.2882469,
            long:-74.1538396,
            title:'Parque Nacional Tayrona',
      },
      {
            startTime : new Date(2016, 05, 11),
            lat:10.4003035,
            long:-75.577856,
            title:'Cartagena',
      },
      {
            startTime : new Date(2016, 05, 12),
            lat:10.4003035,
            long:-75.577856,
            title:'Cartagena e Voo de regresso',
      }
      ];

var markers = [];
var paths = [];



function refreshMap() {
      $.each(markers, function(idx, marker) {
           marker.setMap(null); 
      });
      $.each(paths, function(idx, path) {
           path.setMap(null); 
      });
      
      makers = [];
      paths = [];
      
      var now = new Date();
      $.each(trail, function(idx, spot) {
            if(spot.startTime < now) {
                  var icon = currentIcon;
                  if(idx + 1 <= trail.length && trail[idx + 1].startTime < now) {
                        icon = oldIcon;
                  }
                  
                  if(spot.map != undefined) {
                    map.setCenter(spot.map.center);
                    map.setZoom(spot.map.zoom);
                  }
                  
                  var marker = new google.maps.Marker({
                      position: {lat: spot.lat, lng: spot.long },
                      map: map,
                      title: spot.title,
                      icon: icon
                    });
                    markers.push(marker);
                  
                  if(idx > 0) {  
                        var path = [
                            {lat: spot.lat, lng: spot.long},
                            {lat: trail[idx - 1].lat, lng: trail[idx - 1].long}
                            ];
                  var newPath = new google.maps.Polyline({
                      path: path,
                      geodesic: true,
                      strokeColor: '#FF0000',
                      strokeOpacity: 1.0,
                      strokeWeight: 2
                    });
                    
                    paths.push(newPath);
                  
                  newPath.setMap(map);
                  }
                  
                  
            }
      });
}

function doIt() {
  
  
  
  
  var ruleOne = 'aeiou';
  var ruleTwo = 'repeated char';
  var ruleThree = ['ab', 'cd', 'pq', 'xy'];
  
  var input = $('#lol').text();
  var inputArr = input.split('\n');
  
  for(var i = 0; i < inputArr.length; ++i) {
    //
    // DO TESTS!
    //
  }
  
  $('#result').text('Result = ' + result);
}
  
function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
}
