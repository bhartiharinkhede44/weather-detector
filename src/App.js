import { useEffect, useState } from "react"
import axios from "axios";
import "./App.css"
import image from "../src/cloudy.png"

export default function App() {
  let [weatherData, setWeatherData] = useState({});
  let [city, setCity] = useState("Nagpur");
  async function loadWeatherData() {

    try {
      let respose = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a74cbde469b6cc2c5c52dceafa045fb0`)
      setWeatherData(respose.data);

    }
    catch (error) {
      console.log(error);
    }

  }
  useEffect(() => {
    loadWeatherData();
  }, [])
  useEffect(() => {
    loadWeatherData();
  }, [city])
  return (
    <div className="main-container">
      <h1 className="heading">Weather-detector</h1>
      <input type='text' className="search" value={city} onChange={(e) => {
        setCity(e.target.value);
      }} />
      <div className="contain-container">
      <img src={image} className="image" /> 
        <div className="city"><h3>City:{weatherData.name}</h3></div>
        <div className="card-container">
        <div className="temperature"><h2>Temperature<br />{(weatherData?.main?.temp - 273).toFixed(2)}°C </h2></div>
        <div className="temperature"><h2>Visibility <br/> {weatherData?.visibility} meters</h2></div>
        <div className="temperature"><h2>Wind <br/> {weatherData?.wind?.speed} meters</h2></div>

</div>
      </div>
     

    </div>
  )
}