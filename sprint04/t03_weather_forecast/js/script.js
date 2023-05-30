let key = 'f5ff64b37a1e5727c406056b42a4aa4d';
let latitude = 49.98;
let longitude = 36.23;
let api = `https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&exclude=daily&appid=${key}`;

fetch(api)
    .then(function(resp) {
        return resp.json();
    })
    .then(function(data) {
        setData(data);
    })
    .catch(function() {

    })

function setData(data) {
    document.querySelector('.city').textContent = data.timezone;
    let weatherTable = document.querySelector('.weather-table');
    for (let i = 0; i < data.daily.length; i++) {
        weatherTable.innerHTML +=
            '<div class="content">' +
            '<h3 class="data">' + trueData(data.daily[i]) + '</h3>' +
            '<img src="https://openweathermap.org/img/wn/' + data.daily[i].weather[0].icon + '@2x.png" alt="#"></img>' +
            '<p class="temp">' + (Math.round(data.daily[i].temp.day) - 273) + '&deg;</p>' +
            '</div>';
    }
}

function trueData(data) {
    let date = new Date(+data.dt * 1000);
    let options = {
        month: 'numeric',
        day: 'numeric',
    }
    return date.toLocaleDateString('ru', options);
}
