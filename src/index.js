import './style.css'

import {weatherModule} from './modules/dataRecieverModule'



let inputForm = document.querySelector('.input-form')

//Weather info Elements
let conditionElement = document.querySelector('.condition')
let iconElement = document.querySelector('.icon')
let temperatureElement = document.querySelector('.temp')
let locationElement = document.querySelector('.location')
let regionElement = document.querySelector('.region')
let timeElement = document.querySelector('.time')
let humidityElement = document.querySelector('.humidity')
let rainElement = document.querySelector('.rain')
let windElement = document.querySelector('.wind')

let apiKey = '46859bc2bfea42b09c9170947231208'

let weatherApiSession = weatherModule(apiKey)

inputForm.addEventListener('submit', handleInputForm)

async function handleInputForm(e){
    e.preventDefault()
    let [location, units] = grabInputs()
    let data = await weatherApiSession.getWeatherData(location, units)
    console.log(data);
    RenderDOM.renderComponents(data)
    
}

function grabInputs(){
    let locInput = document.querySelector('#loc-input')
    let unitsInput = document.querySelector('#units-input')
    return [locInput.value, unitsInput.value]
}


class RenderDOM{
    static renderComponents(data){
        iconElement.setAttribute('src', 'https:' + data.current.condition.icon)
        conditionElement.textContent = data.current.condition.text
        locationElement.textContent = data.location.name
        regionElement.textContent = data.location.region
        timeElement.textContent = data.location.localtime
        temperatureElement.textContent = `${data.current.temp_f}F / ${data.current.temp_c} C`
        humidityElement.textContent = `${data.current.humidity}%`
        rainElement.textContent = `${data.forecast.forecastday[0].day.daily_chance_of_rain}%`
        windElement.textContent = `${data.current.wind_mph}mph`

    }
}

//Render New York on load
let initialData = await weatherApiSession.getWeatherData('New York', 'F')
RenderDOM.renderComponents(initialData)