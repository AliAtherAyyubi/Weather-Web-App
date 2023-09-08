import React, { useEffect, useState } from "react";
import Wcontext from "./WeatherContext";

export default function Weath_state(props) {
  
  const [data, setdata] = useState([]);

  useEffect(() => {
    let forecast = async () => {
      let url="https://api.openweathermap.org/data/2.5/forecast?id=524901&q=lahore&exclude=daily&units=metric&appid=fde38c3c010e336307f0b9402c5111ba"

      let res = await fetch(url);

      let fetchdata = await res.json();
      // let t= {list:[{main:{temp:34}},{dt:{humidity:40}}],city:{name:"lahore"}}

      setdata(fetchdata.list[0].main);
      console.log(data.temp);
      // console.log(data.city.name);
      // console.log(data.list[0].weather[0].main);
  };
    forecast();
  }, []);

  return (
    <Wcontext.Provider value={{ data }}>
       {props.children}
      
      </Wcontext.Provider>
  );
}
