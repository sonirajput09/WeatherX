const button = document.getElementById('search-button')
const input = document.getElementById('city-input')
const cityName = document.getElementById('city-name')
const cityTime = document.getElementById('city-time')
const cityTemp = document.getElementById('city-temp')

async function getData(cityName) {
    const promise = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=bcb73b56151640e586273408251608&q=${cityName}&aqi=yes`
    )
    return await promise.json()
}

button.addEventListener('click', async () => {
    const value = input.value;
    const result = await getData(value)
    cityName.innerText = `${result.location.name}, ${result.location.region} - ${result.location.country}`
    cityTime.innerText = result.location.localtime;
    cityTemp.innerText = result.current.temp_c  + "°C";
})

// http://api.weatherapi.com/v1/current.json?key=d5b7aaf71efc45219f441537250207&q=London&aqi=yes