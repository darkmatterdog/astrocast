import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import LocationForecast from '../components/LocationForecast';

var key = require('../components/Key.json');

function Forecast(props){
    const { lat, long, id } = useParams();

    const [latitude, setLatitude] = useState(0);
    const [longitude, setLongitude] = useState(0);

    const [astronomy, setAstronomy] = useState({});
    const [weather, setWeather] = useState({});
    
    const [loaded, setLoaded] = useState(false);

    // time operators
    const currentDateTime = new Date();
    const daysToForecast = new Date();
    daysToForecast.setDate(daysToForecast.getDate() + 10);
    
    
    const fetchData = (latitude, longitude) => {
        console.log("fetching update...")
        
        
        // astronomy data
        axios.get(`https://api.stormglass.io/v2/astronomy/point?lat=${latitude}&lng=${longitude}&end=${daysToForecast.toISOString().substring(0,10)}`, { headers: key })
        .then(res => { setAstronomy(res.data) })
        .catch(err => { console.error(err) });


        // weather data
        let params = "airTemperature,cloudCover,humidity,precipitation,visibility";
        axios.get(`https://api.stormglass.io/v2/weather/point?lat=${latitude}&lng=${longitude}&params=${params}`, { 
            headers: key })
        .then(res => { setWeather(res.data)})
        .catch(err => { console.error(err) });
    }

    useEffect(() => {
        if(id){
            axios.get(`http://localhost:8000/api/locations/${id}`)
            .then(res => {
                setLatitude(res.data.latitude);
                setLongitude(res.data.longitude);
                return res;
            })
            .then(res => {
                let updated = new Date(res.data.updatedAt);
                if(updated.setHours(updated.getHours()+1) < currentDateTime){ 
                    console.log("getting update!")
                    console.log(latitude)
                    // fetchData(latitude, longitude) 
                }
            })
            .catch(err => console.error(err));
        }
        else{
            setLatitude(lat);
            setLongitude(long);
            // fetchData(latitude, longitude);
        }
        setLoaded(true)
    }, []) 


    return (
    <div>
        <LocationForecast astronomy={astronomy} weather={weather}/> { /*  pass different data to it based on how link is called */}
        <hr/>
        <h4>debug info:</h4>
        { loaded && <span>
        {id && <p>ID: { id }</p> }
        <p>Lat: { latitude }</p> 
        <p>Long: { longitude }</p> 
        <p>todo: calculate "best scoring" day based off above data</p>
        </span>
        }
        <hr/>
        </div>
    )
}

export default Forecast