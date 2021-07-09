$("#mapid").css("height",window.innerHeight)

var pidges = 
    [
      "https://cdn.glitch.com/3e214981-794a-4e70-8c39-69c2e74acbc7%2Fpigeon-marker-01.png",
      "https://cdn.glitch.com/3e214981-794a-4e70-8c39-69c2e74acbc7%2Fpigeon-marker-02.png",
            "https://cdn.glitch.com/3e214981-794a-4e70-8c39-69c2e74acbc7%2Fpigeon-marker-03.png",
            "https://cdn.glitch.com/3e214981-794a-4e70-8c39-69c2e74acbc7%2Fpigeon-marker-04.png",
            "https://cdn.glitch.com/3e214981-794a-4e70-8c39-69c2e74acbc7%2Fpigeon-marker-05.png",
            "https://cdn.glitch.com/3e214981-794a-4e70-8c39-69c2e74acbc7%2Fpigeon-marker-06.png",
            "https://cdn.glitch.com/3e214981-794a-4e70-8c39-69c2e74acbc7%2Fpigeon-marker-07.png",
            "https://cdn.glitch.com/3e214981-794a-4e70-8c39-69c2e74acbc7%2Fpigeon-marker-08.png",
            "https://cdn.glitch.com/3e214981-794a-4e70-8c39-69c2e74acbc7%2Fpigeon-marker-09.png"
    ]

var activities = 
    [
      "Sleeping",
      "Flying",
      "Eating a hot dog",
      "Cooing",
      "Resting",
      "Taking a bath",
      "Getting on the subway",
      "Blinking",
      "Perching",
      "Pooping",
      "Pecking",
      "Inspecting a speck on the ground",
      "Help I am actually a human that has been turned into a pigeon",
      "Bored"
    ]



var mymap = L.map('mapid', {zoomControl: false}).setView([40.7348024, -73.9785513], 13);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}{r}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    minZoom: 12,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiaG9vdGFsZXgiLCJhIjoiY2tuMGdxaHA2MG5naDJub2VoMnpoZHduaiJ9.LVYYbmO7vmo2MfVvEGXMIg'
}).addTo(mymap);


var pigeonIcon = L.icon({
    iconUrl: 'https://cdn.glitch.com/3e214981-794a-4e70-8c39-69c2e74acbc7%2Fpigeon-marker-02.png?v=1617379607679',
    shadowUrl: 'https://cdn.glitch.com/3e214981-794a-4e70-8c39-69c2e74acbc7%2Fpigeon-marker-shadow.png?v=1617378751613',

    iconSize:     [50, 62], // size of the icon
    shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    shadowAnchor: [22, 94],  // the same for the shadow
    popupAnchor:  [0, 0] // point from which the popup should open relative to the iconAnchor
});


function randompidge() {
  pigeonIcon = L.icon({
    iconUrl: pidges[Math.floor(Math.random() * pidges.length)],
    shadowUrl: 'https://cdn.glitch.com/3e214981-794a-4e70-8c39-69c2e74acbc7%2Fpigeon-marker-shadow.png?v=1617378751613',

    iconSize:     [50, 62], // size of the icon
    shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [22, 120], // point of the icon which will correspond to marker's location
    shadowAnchor: [22, 125],  // the same for the shadow
    popupAnchor:  [3, -90] // point from which the popup should open relative to the iconAnchor
});
  
}

var i;
for (i = 0; i < 75; i++) {
  randompidge()

    var marker = L.marker([40.7116451 + Math.random()/4, -74.0079054 + Math.random()/4],{icon: pigeonIcon}).addTo(mymap);
  
    marker.bindPopup("<b>"+"Pigeon #" + Math.round(Math.random() * (8000000 - 1) + 1) + "</b><br><i>"+activities[Math.floor(Math.random() * activities.length)]+"</i>").openPopup()
  
}


setInterval(function(){ 
  
  randompidge()

    var marker = L.marker([40.5915016 + Math.random()/5, -74.0079054 + Math.random()/5],{icon: pigeonIcon}).addTo(mymap);
  
    marker.bindPopup("<b>"+"Pigeon #" + Math.round(Math.random() * (8000000 - 1) + 1) + "</b><br><i>"+activities[Math.floor(Math.random() * activities.length)]+"</i>").openPopup()

}, 5000);




setInterval(function(){ 

}, 5000);


