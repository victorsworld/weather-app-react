import React from 'react';
import { useEffect, useState } from 'react';
const Container = ({ setZipCode, currentWeather }) => {
  const [input, setInput] = useState('');



  if (currentWeather && currentWeather.DailyForecasts && currentWeather.DailyForecasts.length > 0) {
  var dateTime = currentWeather.DailyForecasts[0].Date;
  var dateOnly = dateTime.split("T")[0];
  console.log(dateOnly);
} else {
  console.log("Unable to retrieve the date. The data may be undefined or empty.");
}
  

  const handleOnSubmit = (e) => {
    console.log(currentWeather);
    e.preventDefault();
    if (input.length === 5) {
      setZipCode(input);
      setInput('');
    } else {
      console.log('Text of five numbers is required.');
    }
  };
  return (
    <section className="container">
      <form onSubmit={handleOnSubmit}>
        <input
          className="enter"
          placeholder="Zipcode"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button class="button1 ">Search</button>
        {currentWeather.length !== 0 && (
          <div class="card">
            <h1>Date: {dateOnly} </h1>
            <h2>Type: {currentWeather.Headline.Text}</h2>
            <h3>
              {' '}
              Low{' '}
              {currentWeather.DailyForecasts[0].Temperature.Minimum.Unit},{' '}
              {currentWeather.DailyForecasts[0].Temperature.Minimum.Value}{' '}
              <br />
              High:{' '}
              {currentWeather.DailyForecasts[0].Temperature.Maximum.Unit},{' '}
              {currentWeather.DailyForecasts[0].Temperature.Maximum.Value}
            </h3>
            <h1>{}</h1>
          </div>
        )}
      </form>
    </section>
  );
};

export default Container;

/* 
{
    "Headline": {
        "EffectiveDate": "2023-06-23T08:00:00+02:00",
        "EffectiveEpochDate": 1687500000,
        "Severity": 4,
        "Text": "Noticeably cooler Friday",
        "Category": "cooler",
        "EndDate": "2023-06-23T20:00:00+02:00",
        "EndEpochDate": 1687543200,
        "MobileLink": "http://www.accuweather.com/en/de/boock/17322/daily-weather-forecast/124669_pc?lang=en-us",
        "Link": "http://www.accuweather.com/en/de/boock/17322/daily-weather-forecast/124669_pc?lang=en-us"
    },
    "DailyForecasts": [
        {
            "Date": "2023-06-21T07:00:00+02:00",
            "EpochDate": 1687323600,
            "Temperature": {
                "Minimum": {
                    "Value": 58,
                    "Unit": "F",
                    "UnitType": 18
                },
                "Maximum": {
                    "Value": 85,
                    "Unit": "F",
                    "UnitType": 18
                }
            },
            "Day": {
                "Icon": 17,
                "IconPhrase": "Partly sunny w/ t-storms",
                "HasPrecipitation": true,
                "PrecipitationType": "Rain",
                "PrecipitationIntensity": "Heavy"
            },
            "Night": {
                "Icon": 36,
                "IconPhrase": "Intermittent clouds",
                "HasPrecipitation": false
            },
            "Sources": [
                "AccuWeather"
            ],
            "MobileLink": "http://www.accuweather.com/en/de/boock/17322/daily-weather-forecast/124669_pc?day=1&lang=en-us",
            "Link": "http://www.accuweather.com/en/de/boock/17322/daily-weather-forecast/124669_pc?day=1&lang=en-us"
        }
    ]
} */
