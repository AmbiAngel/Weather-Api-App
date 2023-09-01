import './style.css'

import {weatherModule} from './modules/dataRecieverModule'



let inputForm = document.querySelector('.input-form')

let apiKey = '46859bc2bfea42b09c9170947231208'

let weatherApiSession = weatherModule(apiKey)
console.log(weatherApiSession);

inputForm.addEventListener('submit', handleInputForm)

async function handleInputForm(e){
    e.preventDefault()
    let data = await weatherApiSession.getWeatherData()
    console.log(data);
    console.log(data.current.temp_f);
    RenderDOM.renderComponents(data)
    
}


let temperatureElement = document.querySelector('.temp')
let locationElement = document.querySelector('.location')
let regionElement = document.querySelector('.region')
let timeElement = document.querySelector('.time')
let humidityElement = document.querySelector('.humidity')
let rainElement = document.querySelector('.rain')
let windElement = document.querySelector('.wind')


class RenderDOM{
    static renderComponents(data){
        locationElement.textContent = data.location.name
        regionElement.textContent = data.location.region
        timeElement.textContent = data.location.localtime
        temperatureElement.textContent = `${data.current.temp_f}F / ${data.current.temp_c} C`
        humidityElement.textContent = `${data.current.humidity}%`
        rainElement.textContent = `${data.forecast.forecastday[0].day.daily_chance_of_rain}%` //TODO: Need to check API Doc. There's a forecast API for this.
        windElement.textContent = `${data.current.wind_mph}mph`

    }
}