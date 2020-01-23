
function initMap() {
    //this is the center of the map on start
    var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 15.3243, lng: 73.9135}, //goa
    zoom: 18
    });
    

      var markerarray = [
        {
          cords:{lat: 15.3162, lng: 73.9201},
          imgicon: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
          content: '<h3>Majorda Gate, Goa</h3>'
          },
          {
          cords:{lat: 15.3243, lng: 73.9135},
          content: '<h3>Utorda Gate, Goa</h3>'
          }
      ];

      //generate the marker array
      for(var i=0;i<markerarray.length;i++){
        addMarker(markerarray[i]);
      }

          //gate content
         function changehtml(content){
          //additional
          console.log(content)
          if(content=="<h3>Utorda Gate, Goa</h3>")
            {document.getElementById("gname").innerHTML  = "UTORDA GATE";
            console.log("UTORDA")
            }
          else
            {document.getElementById("gname").innerHTML  = "MAJORDA";
            console.log("MAJORDA")
           }
        }
      


          //marker function
          function addMarker(property){
         var marker =  new google.maps.Marker({
          position: property.cords,
          //icon: property.imgicon,
          map: map
          });

          //check for icon
          if(property.imgicon){
            marker.setIcon(property.imgicon);
          }

          //check for content
          if(property.content){
            //text to be displayed
            var infoWindow = new google.maps.InfoWindow({
              content: property.content
              
            });
            // add marker on click
            marker.addListener('click',function(){
              infoWindow.open(map,marker);
              changehtml(property.content);
            })
          }

          }
















}