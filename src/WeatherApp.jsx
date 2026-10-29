import { useState } from 'react'
import InfoBox from './InfoBox'
import SearchBox from './SearchBox' 

export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({
        city : "Delhi",
        feelsLike : 28.56,
        temp : 29.22,
        tempMax : 29.22,
        tempMin : 29.22,
        humidity : 37,
        weather : "scattered clouds"
    });

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    };

    
    return (
        <div className="weather-app">
            <header className="app-header">
                <div>
                    <h1>☁ Weather App</h1>
                    <p>Check the weather in your city</p>
                </div>
            </header>

            <SearchBox updateInfo={updateInfo} />

            <div className="weather-section">
                <InfoBox info={weatherInfo} />
            </div>
        </div>
    );

}