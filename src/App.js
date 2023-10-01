import { useEffect, useState } from "react"
import axios from "axios";
import "./App.css"
import image from "../src/cloudy.png"

export default function App() {
  let [weatherData, setWeatherData] = useState({});
  let [city, setCity] = useState("Mumbai");
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
      <input type='text' value={city} onChange={(e) => {
        setCity(e.target.value);
      }} />
      <h3>City:{weatherData.name}</h3>
      <h2>Temperature<br />{(weatherData?.main?.temp - 273).toFixed(2)}°C </h2>
      <h3>Visibility:{weatherData?.visibility} meters</h3>
      <img src={image} className="image" />

    </div>
  )
}