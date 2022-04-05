//let temperature = parseFloat(document.querySelector("#temperature").textContent);
//let dewpoint = parseFloat(document.querySelector("#dewpoint").textContent);

let getWeatherButton = document.querySelector("#generate");
getWeatherButton.addEventListener('click', getWeatherFiveDay);

//Display Weather and the windspeed if it applies
// pass "imperial" for units if you want fahrenheit or "metric" if you want celsius 
async function getWeatherFiveDay(){
    let units = "imperial";
    let city = document.querySelector("#citystatecountry").value;
    let geocodeinfo = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=58efdcd1324b5f8f0322df4b0040eb55`
    let response = await fetch(geocodeinfo);
    let data = await response.json()
    let lat = data[0].lat;
    let lon = data[0].lon;
    
    let fiveday = `https://api.openweathermap.org/data/2.5/onecall?units=${units}&lat=${lat}&lon=${lon}&exclude=current,minutely,hourly,alerts&appid=f59a4105de49f60386b736f3f818131c`;
    response = await fetch(fiveday);
    data = await response.json()
    fillData(data.daily);
}
function processday(forcast, daynum){
    let humidity = forcast.humidity;
    let tempDay = forcast.temp.day;
    let windspeed = forcast.wind_speed;
    let desc = forcast.weather[0].description;
    let iconnum = forcast.weather[0].icon;
    let iconurl = getIconURL(iconnum);
    let humidityid = "#humidity" + parseInt(daynum);
    let tempid = "#temperature" + parseInt(daynum);
    let windspeedid = "#windspeed" + parseInt(daynum);
    let iconid = "#weathericon" + parseInt(daynum);
    let weatherdescid = "#icondesc" + parseInt(daynum);
    document.querySelector(humidityid).textContent = humidity;
    document.querySelector(tempid).textContent = tempDay;
    document.querySelector(windspeedid).textContent = windspeed;
    document.querySelector(weatherdescid).textContent = desc;
    document.querySelector(iconid).src = iconurl;
}
function fillData(data){
    today = data[0];
    tomorrow = data[1];
    dayafter = data[2];
    dayafterafter=data[3]
    dayafterafterafterafter=data[4]
    processday(today,1);
    processday(tomorrow,2);
    processday(dayafter,3);
    processday(dayafterafter,4)
    processday(dayafterafterafterafter,5)
}
function getIconURL(iconid){
    return `https://openweathermap.org/img/wn/${iconid}@2x.png`;
}