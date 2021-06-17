$(document).ready(function(){
    $(".t1").animate({opacity: '1'}, 1500);
    $(".t2").animate({opacity: '1'}, 2000);

    $('.carousel') .owlCarousel({
        margin:20,
        loop:true,
        autoplayTimeOut:2000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items: 1,
                nav:false
            },
             600:{
                items:2,
                nav:false

            },
             1000:{
                items:3,
                nav:false
            }
        }
    });
});


// ------------------------------------------------------------------menu-bar scrolling 
const menuIcon = document.querySelector(".hamburger-menu");
const navbar = document.querySelector(".navbar");

menuIcon.addEventListener("click", () => {
    navbar.classList.toggle("change");
});

$(function(){
    $(".nav_item a").on('click', function(){
        $("html, body").animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 1000);
    });
});

//-----------------------------------------------------------------popup alert
var btn = document.querySelector(".subs");
var alert_wrapper = document.querySelector(".alert_wrapper");
var close = document.querySelector(".close");

btn.addEventListener('click', function(){
    alert_wrapper.classList.add("active");
});

close.addEventListener("click", function(){
    alert_wrapper.classList.remove("active");
});


//----------------------------------------------------------------scrolling body 
$(function(){
    $(".btn1").on('click', function(){
        $("html, body").animate({
            scrollTop: $('.infos').offset().top
        }, 1000);
    });
});

//----------------------------------------------------------------animation
AOS.init({
    offset: 400,
    duration: 1000
});

//----------------------------------------------------------------swiper cards
var swiper = new Swiper('.swiper-container', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 30,
    stretch: 0,
    depth: 200,
    modifier: 1,
    slideShadows: true,
  },
  loop: true,
  autoplay: {
      delay: 2300,
      disableOnInteraction: false,
  },
});

//------------------------------------------------------------------MAP

let map;

    function initMap() {
        var options = {
            center: { lat: 43.155197, lng: 76.988841 },
            zoom: 10.3,
        }
        
        var map = new google.maps.Map(document.getElementById("map"), options);
        setMarkers(map);
        const flightPlanCoordinates = [
            { lat: 43.218609, lng: 76.924562 },
            { lat: 43.167301, lng: 76.850742 },
            { lat: 43.104671, lng: 76.839064 },
            { lat: 43.018558, lng: 76.993765 },
            { lat: 43.046418, lng: 77.100533 },
            { lat: 43.103334, lng: 77.195649 },
            { lat: 43.197251, lng: 77.104208 },
            { lat: 43.218609, lng: 76.924562 },
        ];

        const flightPath = new google.maps.Polyline({
            path: flightPlanCoordinates,
            geodesic: true,
            strokeColor: "#008000",
            strokeOpacity: 0.6,
            strokeWeight: 1,
        });

        flightPath.setMap(map);
        const contentString =
            '<div id="content">' +
            '<div id="siteNotice">' +
            "</div>" +
            '<h1 id="firstHeading" class="firstHeading">Almaty</h1>' +
            '<div id="bodyContent">' +
            "<p><b>Almaty</b>, Kazakhstan's largest metropolis, is set in the foothills of the Trans-Ili Alatau mountains. </p>" +
            '<p>Attribution: Almaty, <a href="https://en.wikipedia.org/wiki/Almaty">' +
            "https://en.wikipedia.org/wiki/Almaty</a></p>" +
            "</div>" +
            "</div>";
        const infowindow = new google.maps.InfoWindow({
            content: contentString,
        });
        const marker = new google.maps.Marker({
            position: { lat: 43.2220, lng: 76.8512 },
            map,
        });
        marker.addListener("click", () => {
            infowindow.open(map, marker);
        });
    }

    const places = [
            ["Big Almaty Lake", 43.0506, 76.9850, 1],
            ["Ile-Alatau National Park", 43.1576, 77.0488, 2],
            ["Kolsai Lake", 42.9354, 78.3259, 3],
            ["Medeo", 43.1574, 77.0590, 4],
            ["Shymbulak", 43.1287, 77.0805, 5],
            ["Kok tobe", 43.1298, 76.9051, 6],
            ["Charyn", 43.3513, 79.0791, 7],
            ["Butakovka", 43.1904, 76.9995, 8],
            ["Furmanov Peak", 43.1498, 77.1160, 9],
    ];

    function setMarkers(map) {
        const icon = {
            url: "https://www.pinclipart.com/picdir/big/391-3913630_new-training-location-green-location-icon-png-clipart.png",
            scaledSize: new google.maps.Size(20,30),
            origin: new google.maps.Point(0,0),
            anchor: new google.maps.Point(0,0)
        }
        const shape = {
            coords: [1, 1, 1, 20, 18, 20, 18, 1],
            type: "poly",
        };
        var infowindow = new google.maps.InfoWindow();

        for (let i = 0; i < places.length; i++) {
            var place = places[i];
            var marker = new google.maps.Marker({
            position: { lat: place[1], lng: place[2] },
            map: map,
            icon: icon,
            shape: shape,
            title: place[0],
            zIndex: place[3],
            });

            google.maps.event.addListener(marker, 'click', (function(marker, i) {
			return function() {
				infowindow.setContent(places[i][0]);
				infowindow.setOptions({maxWidth: 100});
				infowindow.open(map, marker);
			}
            }) (marker, i));
        }
    }
