const button = document.getElementById('search-button')
const input = document.getElementById('city-input')
const cityName = document.getElementById('city-name')
const cityTime = document.getElementById('city-time')
const cityTemp = document.getElementById('city-temp')
const humidity = document.getElementById('humidity')
const wind = document.getElementById('wind')
const feelsLike = document.getElementById('feels-like')
const weatherInfo = document.getElementById('weather-info')

async function getData(city) {
    const res = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=bcb73b56151640e586273408251608&q=${city}&aqi=yes`
    )
    return await res.json()
}

button.addEventListener('click', async () => {
    const value = input.value.trim()
    if (!value) return

    button.innerText = "Loading..."
    button.disabled = true

    try {
        const result = await getData(value)
        cityName.innerText = `${result.location.name}, ${result.location.region} - ${result.location.country}`
        cityTime.innerText = "🕐 " + result.location.localtime
        cityTemp.innerText = result.current.temp_c + "°C"
        humidity.innerText = result.current.humidity + "%"
        wind.innerText = result.current.wind_kph + " km/h"
        feelsLike.innerText = result.current.feelslike_c + "°C"
        weatherInfo.style.display = "block"
    } catch (e) {
        alert("City not found! Please try again.")
    }

    button.innerText = "Search"
    button.disabled = false
})

input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') button.click()
})