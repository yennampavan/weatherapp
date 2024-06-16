import React, { useState } from 'react'
import './Weatherapp.css'

const Weatherapp = () => {
    const [city,setCity]=useState("")
    const [result,setResult]=useState("")
    const [temp,setTemp]=useState("--")
    const [mintemp,setMintemp]=useState('--');
    const [maxtemp,setMaxtemp]=useState('--');
    const [condition,setCondition]=useState('--');
    const [pressure,setPressure]=useState('--');
    const [humidity,setHumidity]=useState('--');
    const [cloudness,setCloudness]=useState('--');
    const [wind,setWind]=useState('--');

    const convert=(n)=>{
      return Math.round(n-273.15);
    }
    const submithandler=e=>{
      console.log(city)
        e.preventDefault();
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d885aa1d783fd13a55050afeef620fcb`).then(
      response=> response.json()).then(
        data => {
          console.log(data)
          const kelvin = data.main.temp;
          const celcius = kelvin - 273.15;
          setResult("");
          setTemp(convert(data.main.temp)+'°C');
          setMintemp(convert(data.main.temp_min)+'°C')
          setMaxtemp(convert(data.main.temp_max)+'°C')
          setCondition(data.weather[0].description);
          setPressure(data.main.pressure);
          setHumidity(data.main.humidity+'%');
          setCloudness(data.clouds.all+'%');
          setWind(data.wind.speed+'meters/second')


        }
      ).catch(error=>{console.log(error);setResult("error city not found!!");
        setTemp('--');
          setMintemp('--')
          setMaxtemp('--')
          setCondition('--');
          setPressure('--');
          setHumidity('--');
          setCloudness('--');
          setWind('--')
      })
      setCity("");
    }

  return (
    <>
    <center>
    <div className='card'>
        <div className="card-body">
            <h4 className='card-title'><b>WEATHER APP</b></h4>
            <form onSubmit={submithandler}>
                <input type="text" name={city} onChange={e=>setCity(e.target.value)}/><br />
                <input className='input' type="submit" value="get temperature" />
            </form>
            <p className='red-text'>{result}</p>
            <p><b>temperature:</b>{temp}°C</p>
            <p><b>min temperature:</b>{mintemp}</p>
            <p><b>max temperature:</b>{maxtemp}</p>
            <p><b>weather condition:</b>{condition}</p>
            <p><b>Pressure:</b>{pressure}</p>
            <p><b>Humidity:</b>{humidity}</p>
            <p><b>Cloudiness:</b>{cloudness}</p>
            <p><b>Wind Speed:</b>{wind}</p>
        </div>
      
    </div>
    </center>
    </>
  )
}

export default Weatherapp
