import React, { Component } from 'react';

function getWeather () {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=Dhaka, BD&appid=96990c5c335abd806ce9733346bb487c')
    .then(response => response.json())
    .then(data => console.log(data));
    return <div></div>
}

class Weather extends Component {
    render () {
        return getWeather();
    }
}

export default Weather;