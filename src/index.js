import './style.css'
import mountainIMG from './mountain-sky-img.jpg'

import {weatherModule} from './modules/dataRecieverModule'



let inputForm = document.querySelector('.input-form')

//Weather info Elements
let conditionElement = document.querySelector('.condition')
let iconElement = document.querySelector('.icon')
let temperatureElement = document.querySelector('.temp')
let locationElement = document.querySelector('.location')
let countryElement = document.querySelector('.country')
let timeElement = document.querySelector('.time')
let humidityElement = document.querySelector('.humidity')
let rainElement = document.querySelector('.rain')
let windElement = document.querySelector('.wind')

let forecastContainer = document.querySelector('.forecast-container')

let apiKey = '46859bc2bfea42b09c9170947231208'

let weatherApiSession = weatherModule(apiKey)

inputForm.addEventListener('submit', handleInputForm)

async function handleInputForm(e){
    e.preventDefault()
    let [location, units] = grabInputs()
    let data = await weatherApiSession.getWeatherData(location, units)
    console.log(data);
    RenderDOM.renderCurrentWeatherInfo(data)
    RenderDOM.renderForecastInfo(data)
    
}

function grabInputs(){
    let locInput = document.querySelector('#loc-input')
    let unitsInput = document.querySelector('#units-input')
    return [locInput.value, unitsInput.value]
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}


class RenderDOM{
    static renderCurrentWeatherInfo(data){
        iconElement.setAttribute('src', 'https:' + data.current.condition.icon)
        conditionElement.textContent = data.current.condition.text
        locationElement.textContent = data.location.name
        countryElement.textContent = data.location.country
        timeElement.textContent = data.location.localtime
        temperatureElement.textContent = `${data.current.temp_f}F`
        humidityElement.textContent = `${data.current.humidity}%`
        rainElement.textContent = `${data.forecast.forecastday[0].day.daily_chance_of_rain}%`
        windElement.textContent = `${data.current.wind_mph}mph`
    }

    static renderForecastInfo(data){
        removeAllChildNodes(forecastContainer)
        let forecastArr = data.forecast.forecastday
        forecastArr.forEach(day => {
            console.log(day.date);
            console.log(day.day.condition.text);
            console.log(day.day.avgtemp_f);

            let forecastDayContainer = document.createElement('div')
            forecastDayContainer.classList.add('forecast-day-container')

            let forecastIcon = document.createElement('img')
            forecastIcon.setAttribute('src','https:' + day.day.condition.icon)
            forecastDayContainer.appendChild(forecastIcon)

            let forecastDate = document.createElement('p')
            forecastDate.textContent = day.date
            forecastDayContainer.appendChild(forecastDate)

            let forecastCondition = document.createElement('p')
            forecastCondition.textContent = day.day.condition.text
            forecastDayContainer.appendChild(forecastCondition)

            let forecastTemp = document.createElement('p')
            forecastTemp.textContent = day.day.avgtemp_f
            forecastDayContainer.appendChild(forecastTemp)
            

            forecastContainer.appendChild(forecastDayContainer)
        })
    }
}


//Render New York on load
async function initialLoad(){
    let initialData = await weatherApiSession.getWeatherData('New York', 'F')
    console.log(initialData);
    RenderDOM.renderCurrentWeatherInfo(initialData)
    RenderDOM.renderForecastInfo(initialData)
}

initialLoad()