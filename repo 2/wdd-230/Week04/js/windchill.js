const weatherIcon = document.querySelector(".wIcon")
const iconDesc = document.querySelector(".iconDesc")
const localtemp = document.querySelector(".temp")
const wSpeed = document.querySelector(".windSpeed")
const wChill = document.querySelector(".windChill")

const apiInfo = "https://api.openweathermap.org/data/2.5/weather?q=Portland,US&units=imperial&APPID=58efdcd1324b5f8f0322df4b0040eb55"

let data, newTemp, speed;

async function getWeather() {
    const response = await fetch(apiInfo);
    data = await response.json()

    return data

}    

const fillData = async () => {
    await getWeather();
    newTemp = data['main']['temp']
    speed = data['wind']['speed']

    let currentTemp = Math.round(newTemp)
    localtemp.textContent += `${currentTemp}`;

    let currentspeed = Math.round(speed)
    wSpeed.textContent = `${currentspeed} mph`
    return newTemp, speed
    }

const getIconDesc = async () => {
    await fillData();
    let icon = data['weather'][0]['icon'];
    let desc = data['weather'][0]['description'];

    weatherIcon.src = `https://openweathermap.org/img/wn/${icon}@2x.png`;
    weatherIcon.alt = `open weather map API icon: ${desc}`;
    iconDesc.textContent = desc.toUpperCase()
} 

const calculateWindChill = async () => {
    await getIconDesc();
    if (newTemp <= 50 && speed > 3.0) {
        let chill = 35.74 + (0.6215*newTemp) - (35.75*speed**0.16) + (0.4275*newTemp*speed**0.16)
        chill = Math.round(chill)
        wChill.innerHTML = `Feels like ${chill}&#176;F`
    }else {
        wChill.textContent = `N/A`
    }
    }
  
window.addEventListener('load', calculateWindChill);
