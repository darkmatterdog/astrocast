import React from 'react'
import { Link } from 'react-router-dom';

function AllLocations(props) {
    const { locations } = props;



    return (
        <div>
            {locations.map( (location, index) => {
                return <p key={index}>
                    <Link to={`/locations/${location._id}`}>{location.name}</Link>
                    <span> at ({location.latitude}, {location.longitude})</span></p>
            })}
        </div>
    )
}

export default AllLocations