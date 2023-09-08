import React, { useState } from "react";
import '../Style/section2.css'

export default function Detail(props) {
  let weather = props.weather;

  const [location, setlocation] = useState("");

  let fewLoc=['Lahore','Karachi','Islamabad','Quetta','Qatar','London','California']
  let handlechange = (e) => {
    e.preventDefault();
    props.setlocation(location);
  };
  
  let listcall= (index)=>{
    setlocation(fewLoc[index])
  }
  return (
    <>
      <div className="col-5 detailbox ">
        <div className="locationtab">

          <form action="" id="searchform" onSubmit={handlechange}>
            <input
              type="text"
              className="text-white"
              id="searchbox"
              value={location} required placeholder="Search Location"
              onChange={(e) => {
                setlocation(e.target.value);
              }}
            />


            <button type="submit" className="btn btn-primary">
              <i className="uil uil-search "></i>
            </button>
          </form>

          <ul className="list-group">
            {!props.checklocation? (
              <li className="list-group-item">Not Found</li>
            ) : (
              <div>
                <li className="list-group-item" onClick={()=>{listcall(0)}}>{fewLoc[0]}</li>
                <li className="list-group-item" onClick={()=>{listcall(1)}}>{fewLoc[1]}</li>
                <li className="list-group-item" onClick={()=>{listcall(2)}}>{fewLoc[2]}</li>
                <li className="list-group-item" onClick={()=>{listcall(3)}}>{fewLoc[3]}</li>
                <li className="list-group-item" onClick={()=>{listcall(4)}}>{fewLoc[4]}</li>
                <li className="list-group-item" onClick={()=>{listcall(5)}}>{fewLoc[5]}</li>
                <li className="list-group-item" onClick={()=>{listcall(6)}}>{fewLoc[6]}</li>
                
              </div>
            )}
          </ul>
        </div>

        <div className="weatherdetail">
          <table className="table1 table-borderless">
          <h5 className="mx-2 fw-1">Weather Details</h5>

            <thead>
              <tr>
                <th scope="col"></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Cloudy</td>
                <td className="right">{weather.clouds} %</td>
              </tr>
              <tr>
                <td>Humidity</td>
                <td className="right">{weather.humidity} %</td>
              </tr>

              <tr>
                <td>Wind</td>
                <td className="right">{weather.wind} m/s</td>
              </tr>

              <tr>
                <td>Visibility</td>
                <td className="right">{weather.visibility/1000} km</td>
              </tr>

              <tr>
                <td>Pressure</td>
                <td className="right">{weather.pressure} mb</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
