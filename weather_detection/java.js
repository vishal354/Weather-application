
//https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

const weatherApi = {
    key:"2506130e321b179c2f65f38e4abdf647",
    baseUrl:"https://api.openweathermap.org/data/2.5/weather",
}


const searchInputBox =  document.getElementById('input-box');

//Event Listener Function on keypress
searchInputBox.addEventListener('keypress',(event) => {

    if(event.keycode == 13) {
        console.log(searchInputBox.value);
        getWeatherReport(searchInputBox.value);
        document.querySelector('.weather-body').style.display = "block";
    }

});

// Get Weather Report
function getWeatherReport(city) {
    fetch(`${weatherApi.baseUrl}?q=${city}&appid=${weatherApi.key}&units=metrics`)
    .then(weather =>{
        return weather.json();
    }).then(showWeatherReport);
} 

// Show Weather Report
function showWeatherReport(weather){
     console.log(weather)

     let city = document.getElementById('city');
     city.innerText = `${weather.name}, ${weather.sys.country}`;

     let temperature = document.getElementById('temp');
     temperature.innerHTML = `${Math.round(weather.main.temp)}&deg;C`;

     let minmaxTemp = document.getElementById('min-max');
     minmaxTemp.innerHTML = `${Math.floor(weather.main.temp_min)}&deg;c (min)/ ${Math.ceil (weather.main.temp_max)}&deg;C (max) `;

     let weatherType = document.getElementById('weather');
     weatherType.innerText = `${weather.weather[0].main}`;

     let date = document.getElementById('weather');
     let todayDate = new Date();
     date.innerText = dataManage(todayDate);

     if(weatherType.textContent == 'Clear'){
        document.body.styles.background = "url('images/Clear.jpg')";
    }

    else if(weatherType.textContent == 'Snow'){
        document.body.styles.background = "url('images/Snow.jpg')";
    }

    else if(weatherType.textContent == 'Sunny'){
        document.body.styles.background = "url('images/Sunny.jpg')";
    }

    else if(weatherType.textContent == 'Rain'){
        document.body.styles.background = "url('images/Rain.jpg')";
    }

    else if(weatherType.textContent == 'Clouds'){
        document.body.styles.background = "url('images/Clouds.jpg')";
    }

    else if(weatherType.textContent == 'Thunderstrom'){
        document.body.styles.background = "url('images/thunderstrom.jpg')";
    }

    else if(weatherType.textContent == 'Lightening'){
        document.body.styles.background = "url('images/Lightening.jpg')";
    }

    else if(weatherType.textContent == 'Haze'){
        document.body.styles.background = "url('images/haze.jpg')";
    }

    else if(weatherType.textContent == 'wind'){
        document.body.styles.background = "url('images/wind.jpg')";
    }


}

// Date manage
function dataManage(dateArg) {

    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let months=["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
     
    let year =  dateArg.getFullYear();
    let month = months[dateArg.getMonth()];
    let date = dateArg.getDate();
    let day = days[dateArg.getDay()];

    return `${date} ${month} ${day} ${year}`;
}
