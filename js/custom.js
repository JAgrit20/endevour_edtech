// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();


// client section owl carousel
$(".client_owl-carousel").owlCarousel({
    loop: true,
    margin: 20,
    dots: false,
    nav: true,
    navText: [],
    autoplay: true,
    autoplayHoverPause: true,
    navText: [
        '<i class="fa fa-angle-left" aria-hidden="true"></i>',
        '<i class="fa fa-angle-right" aria-hidden="true"></i>'
    ],
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 2
        }
    }
});



/** google_map js **/
function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(40.712775, -74.005973),
        zoom: 18,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}

document.getElementById('subscribeForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(event.target);

    // Validate email input if needed

    // Send a POST request to your server
    fetch('http://127.0.0.1:8000/subscribe/', {
        method: 'POST',
   
        body: formData,
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        // Optional: Do something with the successful response
        console.log('Subscription successful');

        // Clear the form after a successful subscription
        document.getElementById('subscribeForm').reset();
    })
    .catch(error => {
        // Optional: Handle errors
        console.error('Error subscribing:', error);
    });
});