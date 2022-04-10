var input = document.querySelector('#input');
var submitBtn = document.querySelector('#submitBtn');

var currentCity = document.querySelector('#currentCity');
var currentIcon = document.querySelector('#currentIcon');
var currentTemp = document.querySelector('#currentTemp');
var currentWind = document.querySelector('#currentWind');
var currentHumid = document.querySelector('#currentHumid');
var currentUV = document.querySelector('#currentUV');

var tomorrowDate = document.querySelector('#tomorrowDate');
var tomorrowIcon = document.querySelector('#tomorrowIcon')
var tomorrowTemp = document.querySelector('#tomorrowTemp');
var tomorrowWind = document.querySelector('#tomorrowWind');
var tomorrowHumid = document.querySelector('#tomorrowHumid');

var secondDate = document.querySelector('#secondDate');
var secondIcon = document.querySelector('#secondIcon')
var secondTemp = document.querySelector('#secondTemp');
var secondWind = document.querySelector('#secondWind');
var secondHumid = document.querySelector('#secondHumid');

var thirdDate = document.querySelector('#thirdDate');
var thirdIcon = document.querySelector('#thirdIcon')
var thirdTemp = document.querySelector('#thirdTemp');
var thirdWind = document.querySelector('#thirdWind');
var thirdHumid = document.querySelector('#thirdHumid');

var fourthDate = document.querySelector('#fourthDate');
var fourthIcon = document.querySelector('#fourthIcon')
var fourthTemp = document.querySelector('#fourthTemp');
var fourthWind = document.querySelector('#fourthWind');
var fourthHumid = document.querySelector('#fourthHumid');

var fifthDate = document.querySelector('#fifthDate');
var fifthIcon = document.querySelector('#fifthIcon')
var fifthTemp = document.querySelector('#fifthTemp');
var fifthWind = document.querySelector('#fifthWind');
var fifthHumid = document.querySelector('#fifthHumid');

function formatDateString(dateString) {
    var dateObj = new Date(dateString);
    return (dateObj.getMonth()+1) + '/' + dateObj.getDate() + '/' + dateObj.getFullYear()
}

function getAPI() {
    var requestURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + input.value + "&appid=ccf603ea89c971a79c3cb32b241ca3c3&units=imperial";

    fetch(requestURL)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        currentCity.textContent = formatDateString(data.list[0].dt_txt)
        currentIcon.src = "http://openweathermap.org/img/wn/" + data.list[0].weather[0].icon + "@2x.png"
        currentTemp.textContent = "Temp: " + data.list[0].main.temp + " F"
        currentWind.textContent = "Wind: " + data.list[0].wind.speed + " MPH"
        currentHumid.textContent = "Humidity: " + data.list[0].main.humidity

        tomorrowDate.textContent = formatDateString(data.list[7].dt_txt)
        tomorrowIcon.src = "http://openweathermap.org/img/wn/" + data.list[7].weather[0].icon + "@2x.png"
        tomorrowTemp.textContent = "Temp: " + data.list[7].main.temp + " F"
        tomorrowWind.textContent = "Wind: " + data.list[7].wind.speed + " MPH"
        tomorrowHumid.textContent = "Humidity: " + data.list[7].main.humidity

        secondDate.textContent = formatDateString(data.list[15].dt_txt)
        secondIcon.src = "http://openweathermap.org/img/wn/" + data.list[15].weather[0].icon + "@2x.png"
        secondTemp.textContent = "Temp: " + data.list[15].main.temp + " F"
        secondWind.textContent = "Wind: " + data.list[15].wind.speed + " MPH"
        secondHumid.textContent = "Humidity: " + data.list[15].main.humidity

        thirdDate.textContent= formatDateString(data.list[23].dt_txt)
        thirdIcon.src = "http://openweathermap.org/img/wn/" + data.list[23].weather[0].icon + "@2x.png"
        thirdTemp.textContent = "Temp: " + data.list[23].main.temp + " F"
        thirdWind.textContent = "Wind: " + data.list[23].wind.speed + " MPH"
        thirdHumid.textContent = "Humidity: " + data.list[23].main.humidity

        fourthDate.textContent = formatDateString(data.list[31].dt_txt)
        fourthIcon.src = "http://openweathermap.org/img/wn/" + data.list[31].weather[0].icon + "@2x.png"
        fourthTemp.textContent = "Temp: " + data.list[31].main.temp + " F"
        fourthWind.textContent = "Wind: " + data.list[31].wind.speed + " MPH"
        fourthHumid.textContent = "Humidity: " + data.list[31].main.humidity

        fifthDate.textContent = formatDateString(data.list[39].dt_txt)
        fifthIcon.src = "http://openweathermap.org/img/wn/" + data.list[39].weather[0].icon + "@2x.png"
        fifthTemp.textContent = "Temp: " + data.list[39].main.temp + " F"
        fifthWind.textContent = "Wind: " + data.list[39].wind.speed + " MPH"
        fifthHumid.textContent = "Humidity: " + data.list[39].main.humidity
    })
    .catch(err => {
        console.error(err)
        alert("Wrong City Name!")
    })

    // Need to fetch UV data. Below does not work
    var uvURL = "https://api.openweathermap.org/data/2.5/onecall?" + input.value + "&appid=ccf603ea89c971a79c3cb32b241ca3c3";
    fetch(uvURL)
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
};

submitBtn.addEventListener('click', getAPI);
input.addEventListener('submit', getAPI);
