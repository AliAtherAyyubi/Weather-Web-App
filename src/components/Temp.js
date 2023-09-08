// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import menubtn from "../icons/menu.png";

// import required modules
import { Navigation, Autoplay } from "swiper/modules";
import Forecast from "./forecast";
// importing images //
import sunnyimg from "../images/sunny.jpg";
import cloudyimg from "../images/cloudy.jpg";
import rainyimg from "../images/rain.jpg";
import hotimg from "../images/hot.jpg";
import coldimg from "../images/cold.jpg";

export default function Temp(props) {
  let weather = props.weather;
  let forecast = props.forecast;

  // function to get time in a sequence //
  let gettime = () => {
    let date = new Date();
    var time = date.toLocaleString("en-US", {
      hour: "numeric",
      minute: "numeric",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour12: true,
    });
    return time;
  };
  // function to set backgroundimage according to weather //
  let getimage = () => {
    var icon;
    var condition = weather.title.toLowerCase();
    switch (condition) {
      case "clouds":
        icon = cloudyimg;
        break;
      case "rain":
        icon = rainyimg;
        break;
      case "clear":
        icon = sunnyimg;
        break;
      default:
        icon = sunnyimg;
        break;
    }
    if (weather.temp >= 39) icon = hotimg;
    else if (weather.temp <= 20) icon = coldimg;

    return icon;
  };
  
  return (
    <>
      <div className={`col-7 forecastbox`} style={{ backgroundImage: `url(${getimage()})` }}>
        <di className="menubtn"><img src={menubtn} alt="" className="menuicon"/></di>
        <div className="tempbox tempdetail">
          <div id="temperature">
            {Math.round(weather.temp)}
            <span>&deg;C</span>
          </div>
          <div className="timebox">
            <span id="city">{weather.city}</span>
            <span id="time">{gettime()}</span>
          </div>

          <div id="temptitle">
            <div>
              <img
                src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`}
                alt=""
                className="tempicon"
              />
            </div>
            <div className="title">{weather.description}</div>
          </div>
        </div>

        {props.checklocation && <div className="forecast prediction slider ">
          {/* <i class="fa-solid fa-angle-left swiper-button-prev"></i> */}

          <Swiper
            navigation={true}
            modules={[Navigation]}
            className="mySwiper"
            slidesPerView={3}
            spaceBetween={5}
            speed={1500}
          >
            {forecast.map((item) => {
              return (
                <SwiperSlide>
                  <Forecast
                    high={item.main.temp_max}
                    low={item.main.temp_min}
                    icon={item.weather[0].icon}
                    time={item.dt_txt}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>}
      </div>
    </>
  );
}
