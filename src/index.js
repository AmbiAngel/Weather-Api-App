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


class RenderDOM{
    static renderComponents(data){
        temperatureElement.textContent = data.current.temp_f
    }
}