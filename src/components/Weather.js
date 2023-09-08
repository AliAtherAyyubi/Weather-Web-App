import React, { useEffect, useState } from "react";
import Temp from "./Temp";
import Detail from "./Detail";
import "../Style/style.css";

export default function Weather() {
  const [weather, setweather] = useState({
    temp: 0,
    humidity: 0,
    wind: 0,
    city: "City",
    title: "title",
    pressure:0,clouds:""
  });
  const [weekfct, setweekfct] = useState([])
  const [location, setlocation] = useState("lahore");
  const [checklocation, setchecklocation] = useState(true);
  const [loading, setloading] = useState(false);

  let forecast = async () => {
    let url = `https://api.openweathermap.org/data/2.5/forecast?id=524901&q=${location}&exclude=hourly&units=metric&appid=fde38c3c010e336307f0b9402c5111ba`;

    let res = await fetch(url);
    setloading(true)

    let fetchdata = await res.json();
    // let t= {list:[{main:{temp:34}},{dt:{humidity:40}}],city:{name:"lahore"}}
    setweather({
      temp: fetchdata.list[0].main.temp,
      humidity: fetchdata.list[0].main.humidity,
      wind: fetchdata.list[0].wind.speed,
      city: fetchdata.city.name,
      title: fetchdata.list[0].weather[0].main,
      description: fetchdata.list[0].weather[0].description,
      clouds:fetchdata.list[0].clouds.all,
      pressure:fetchdata.list[0].main.pressure,
      icon:fetchdata.list[0].weather[0].icon,
      visibility:fetchdata.list[0].visibility
    });
    setweekfct(fetchdata.list)
    setTimeout(() => {
      setloading(false)
    }, 1000);
  };
  useEffect(() => {
    forecast();
  }, []);

  let city = async (loc) => {
    setlocation(loc);
    let url = `https://api.openweathermap.org/data/2.5/forecast?id=524901&q=${loc}&exclude=hourly&units=metric&appid=fde38c3c010e336307f0b9402c5111ba`;
    let res = await fetch(url);
    let fetchdata = await res.json();
    setweekfct(fetchdata.list)

    if (fetchdata.cod === "404") 
    setchecklocation(false);
    else {
    setloading(true)
      
      setweather({
        temp: fetchdata.list[0].main.temp,
        humidity: fetchdata.list[0].main.humidity,
        wind: fetchdata.list[0].wind.speed,
        city: fetchdata.city.name,
        title: fetchdata.list[0].weather[0].main,
        description: fetchdata.list[0].weather[0].description,
        clouds:fetchdata.list[0].clouds.all,
        pressure: fetchdata.list[0].main.pressure,
        icon:fetchdata.list[0].weather[0].icon,
        visibility:fetchdata.list[0].visibility
      });
      setchecklocation(true);
      
    }
    setTimeout(() => {
      setloading(false)
    }, 800);
    // console.log(fetchdata);
  };

  return (
    <>
    
      <div className="container weatherbox">
        {loading ? (
          <div className="spinner-border"></div>
        ) : (
          <div className="row">
            
            <Temp weather={weather} forecast={weekfct} checklocation={checklocation}/>
            <Detail
              weather={weather}
              setlocation={city}
              checklocation={checklocation}
            />
          </div>
        )}
      </div>

    </>
  );
}
