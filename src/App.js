import './App.css';
import { useEffect, useState } from 'react';
import Container from './Container';

function App() {
  const [currentWeather, setCurrentWeather] = useState([]);
  const [locationKey, setLocationKey] = useState('');
  const [zipCode, setZipCode] = useState("")
  const apiKey = process.env.REACT_APP_WEATHER_API_KEY;

  useEffect(()=>{
    const getData = async () =>{
      const response = await fetch(`http://dataservice.accuweather.com/locations/v1/postalcodes/search?apikey=YY1NBx5hvhWpxPMg94iaPGHxA2vxI0ug&q=${zipCode}`)
      const data = await response.json()
      console.log(data[0])
      setLocationKey(data[0].Key)
    }
    if(zipCode !== "") getData()
  }, [zipCode])

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        `http://dataservice.accuweather.com/forecasts/v1/daily/1day/${locationKey}?apikey=${apiKey}`);
        console.log(response)
      const data = await response.json();
      setCurrentWeather(data)
      console.log("this is the final data    " + data.Headline)
    };
    if(locationKey !== "") getData()
  }, [locationKey]);

  //create a function that fetches a location based on zipCode and it will update the location keystate 

  return <div className="App">
    <Container
     setZipCode={setZipCode}
     currentWeather={currentWeather}
    />
  </div>;
}

export default App;
