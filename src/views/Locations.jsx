import React, { useState, useEffect } from 'react'
import axios from 'axios'
import AllLocations from '../components/AllLocations'
import { NavigationType, useNavigate } from 'react-router-dom';

function Locations(props) {
    const [locations, setLocations] = useState([]);
    const [loaded, setLoaded] = useState(false);

    const [latitude, setLatitude] = useState(0.0);
    const [longitude, setLongitude] = useState(0.0);
    
    const navigate = useNavigate();

    const findByCoords = e => {
        e.preventDefault();
        // todo: if coordinates match database entry, navigate there instead
        
        navigate(`/locations/${latitude}/${longitude}`)
    }

    useEffect(() => {
        axios.get('http://localhost:8000/api/locations')
        .then(res => {
            setLocations(res.data)
            setLoaded(true)
        })
        .catch(err => console.error(err));
    }, []);


    return (
        <div>
            <h2>Locations:</h2>
            {loaded && <AllLocations locations={locations}/> }
            <hr/>

            <form onSubmit={findByCoords}>
                <p>...or find data from a set of coordinates:</p>

                <label htmlFor="latitude">Latitude:</label>
                <input type="number"
                step="0.01"
                min={-90}
                max={90}
                value={latitude}
                onChange={(e) => {setLatitude(e.target.value)}}/>

                <br/>

                <label htmlFor="longitude">Longitude:</label>
                <input type="number"
                step="0.01"
                min={-180}
                max={180}
                value={longitude}
                onChange={(e) => {setLongitude(e.target.value)}}/>

                <br/>

                <input type="submit" value="Search"/>
            </form>
            </div>
    )
}

export default Locations