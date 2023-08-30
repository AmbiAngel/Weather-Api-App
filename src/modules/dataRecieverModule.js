function weatherModule(api){
    let apiKey = api

    
    async function getWeatherData(){
        let [location, units] = grabInputs()
    
        // let url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=no`
        let url = `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${location}&days=3&aqi=yes&alerts=no
        `
    
        let res = await fetch(url)
        let data = await res.json()
    
        return data
    }
    
    
    
    
    function grabInputs(){
        let locInput = document.querySelector('#loc-input')
        let unitsInput = document.querySelector('#units-input')
    
        return [locInput.value, unitsInput.value]
    }

    return {getWeatherData}

}


export {weatherModule}