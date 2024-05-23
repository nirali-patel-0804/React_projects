import React  from "react";
import "./Weather.css";

 
const Weather = () =>
{
    

     const Search = async  () =>
    {
        const elements = document.getElementsByClassName("cityInput")
        if (elements[0].value===" ")
        {
            return 0;
        }
        let url ='https://api.openweathermap.org/data/2.5/weather?q=german&appid=ae2d0a1edbc3546353ea1947fdf06a7f';
        let response = await fetch(url);
        let data =  await response.json();

        let Humidity = document.getElementsByClassName("humidity_percentage");
        let Wind = document.getElementsByClassName("wind_rate");
        let Temperature = document.getElementsByClassName("weather_temp");
        let Location = document.getElementsByClassName("weather_location");

        Humidity[0].innerHTML= data.main.humidity+ "%";
        Wind[0].innerHTML=data.wind.speed+"km/h";
        Temperature[0].innerHTML = data.main.temp+ "°C";
        Location[0].innerHTML = data.name;
     }
    return(

        
        <div className="background1">
         <div className="container">
            <div className="top-bar">
                <input type="text" className="cityInput" placeholder="search" />
                <div className="search-icon" onClick={() => {Search()}}>
                    <img src = '../src/assest/search.png' className="img1" alt=" " />
                </div>
            </div>
            <div className="weather_image">
                <img src="../src/assest/cloud.webp" className="img2" />
            </div>
            <div className="weather_temp">24°C</div>
            <div className="weather_location">London</div>
            <div className="data_container">
                <div className="elements">
                    <img src="../src/assest/humidity.jpeg" alt="" className="icon" />
                    <div className="data">
                        <div className="humidity_percentage">64%</div>
                        <div className="text">Humidity</div>
                    </div>
                </div>
                <div className="elements">
                    <img src="../src/assest/windy.webp" alt="" className="icon" />
                    <div className="data">
                        <div className="wind_rate">18 km/h</div>
                        <div className="text">Wind Speed</div>
                    </div>
                </div>
            </div>

        </div> 
        </div>
    )
}
export default Weather