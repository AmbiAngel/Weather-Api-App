function weatherModule(api){
    let apiKey = api

    
    async function getWeatherData(){
        let [location, units] = grabInputs()
    
        let url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=no`
    
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