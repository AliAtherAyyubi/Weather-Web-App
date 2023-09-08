import React from "react";
import "../Style/forecast.css";



export default function forecast(props) {
  let getdate = (date) => {
    let months=['Jan','Feb','Mar',"Apr","May",'Jun',"Jul",'Aug','Sep','Oct','Nov','Dec']
    // let date = new Date();
    var day=date.slice(8,10)
    date=date.slice(5,8)
    date=parseInt(date)
    return months[date-1]+" "+day;
  };
  let settime=(time)=>{
    var unit="";
    time=time.slice(10,13)
    time= parseInt(time)

    if(time===0){
      time=12;
      unit='am'

    }
    else if(time===12)
      unit='pm'
    else if(time>12){
      time=time%12;
      unit='pm'
    }
    else
      unit='am'
    
    return time+" "+unit
  }

  return (
    <>
      <div className="content">
        <div className="date text-white" style={{letterSpacing:'0.8px'}}>
          {getdate(props.time)} <span className="text-white">{settime(props.time)}</span>
        </div>
        <div className="temp-icon">
          <img src={`https://openweathermap.org/img/wn/${props.icon}@2x.png`} className="icon" alt="" />
          <div className="highlow">
            <p className="text-white">{props.high}&deg;</p>
            <p className="text-white">{props.low}&deg;</p>
          </div>
        </div>
      </div>

      {/* <p>{item.dt_txt}</p>
              <p>{index}</p>
              <p>icon: {item.weather[0].icon}</p>
              <p>Min: {item.main.temp_min}&deg;C</p>
              <p>Max: {item.main.temp_max}&deg;C</p> */}
    </>
  );
}
