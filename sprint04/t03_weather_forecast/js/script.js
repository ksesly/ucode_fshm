let key = '71e2d79e00d51250e656f69a1a4e9e25';
let latitude = 49.988358;
let longitude = 36.232845;
let api = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=daily&appid=${key}`;

function main() {
  fetch(api)
    .then(function(resp) {
      return resp.json();
    })
    .then(function(data) {
      setData(data);
    })
    // .catch(function(error) {
    //   console.log(error);
    // });
}

function setData(data) {
  let array = data.dt;  
  let img = document.getElementsByTagName('img');
  let main = document.querySelector('.weather-table');
  let days = main.getElementsByClassName('day');
  for (let day = 0; day < days.length; day++) {
    let date = new Date(array[day].dt * 1000);
    let formattedDate =
      date.getDate() +
      '.' +
      (date.getMonth() + 1 < 10
        ? '0'.concat('', date.getMonth() + 1)
        : date.getMonth() + 1);
    days[day].querySelector('.data').innerHTML = formattedDate;
    let temp =
      (array[day].temp < 0 ? '-' : '+') +
      Math.abs(array[day].temp) +
      '&#176';
    days[day].querySelector('.temp').innerHTML = temp;
    let result =
      'http://openweather.org/img/w/' + array[day].weather[0].icon + '.png';
    img[day].src = result;
  }
}

window.onload = function() {
  main();
};
