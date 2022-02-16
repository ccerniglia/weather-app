window.addEventListener('load', ()=> {
    let long;
    let lat;
    let temperatureDegree = document.querySelector('.temperature-degree');
    let locationTimezone = document.querySelector('.location-timezone');
    let temperatureDescription = document.querySelector('.temperature-description');

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position =>{
            long = position.coords.longitude;
            lat = position.coords.latitude;

            const api = `https://api.openweathermap.org/data/2.5/weather?q=Chicago,us&units=imperial&appid=cdfd8a49b12aeb3af7550aefeb7c18e8` ;

            
            fetch(api)
            .then(response =>{
                return response.json();
            })
            .then(object => {
                console.log(object);
                const {temp} = object.main;
                const name = object.name;
                const {description} = object.weather[0];
                //Set DOM Elements from the API
                temperatureDegree.textContent = temp;
                locationTimezone.textContent = name;
                temperatureDescription.textContent = description;
            });
        });

    }
});