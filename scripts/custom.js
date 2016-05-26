var map;

var oldIcon;
  
var currentIcon;

var deadline = 'June 13 2016 19:15:00 GMT+00:00';

      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 38.7821759, lng: -16.2216661},
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
        
        
        var timeinterval = setInterval(function(){
          var d = new Date();
          var utc = d.getTime() - (d.getTimezoneOffset() * 60000);
          var nd = new Date(utc + (3600000*-5));
          $('.hours').text(nd.getHours() + ':' + nd.getMinutes() + ':' + nd.getSeconds());
          
          var t = getTimeRemaining(deadline);
          $('.eta').text(' ' + t.days +'dias ' + t.hours + 'horas ' + t.minutes + 'minutos ' + t.seconds + 'segundos ');
          if(t.total<=0){
            clearInterval(timeinterval);
          }
        },1000);
        
      }


function getTimeRemaining(endtime){
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor( (t/1000) % 60 );
  var minutes = Math.floor( (t/1000/60) % 60 );
  var hours = Math.floor( (t/(1000*60*60)) % 24 );
  var days = Math.floor( t/(1000*60*60*24) );
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

var trail = 
      [
        {
            startTime : new Date(2016, 04, 26),
            lat:37.7450122,
            long:-25.6959568,
            title:'PDL'
      },
      {
            startTime : new Date(2016, 04, 26),
            lat:38.7437396,
            long:-9.2302442,
            title:'Lisboa',
      },
      {
            startTime : new Date(2016, 04, 27, 07, 15),
            lat:40.4381311,
            long:3.8196226,
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
      ,
      {
            startTime : new Date(2016, 05, 12, 16, 00),
            lat:4.6486259,
            long:-74.2478956,
            title:'Bogotá',
      }
      ,
      {
            startTime : new Date(2016, 05, 13, 08, 20),
            lat:40.4381311,
            long:3.8196226,
            title:'Madrid',
      },
      ,
      {
            startTime : new Date(2016, 05, 13, 10, 45),
            lat:38.7437396,
            long:-9.2302442,
            title:'Lisboa',
      },
      ,
      {
            startTime : new Date(2016, 05, 13, 19, 15),
            lat:37.7450122,
            long:-25.6959568,
            title:'PDL',
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
      var gotCurrent = false;
      $.each(trail, function(idx, spot) {
            if(!gotCurrent && spot.startTime < now) {
                  var icon = currentIcon;
                  if(idx + 1 <= trail.length && trail[idx + 1].startTime < now) {
                        icon = oldIcon;
                        
                  } else {
                    $('.curr').text(spot.title);
                    $('.next').text(trail[idx + 1].title);
                    gotCurrent = true;
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
