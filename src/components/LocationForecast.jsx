import React from 'react'

function LocationForecast(props){

  const {astronomy, weather} = props;

  return (
    <div>
      <h2>TODAY'S FORECAST</h2>
      <hr/>
      <h4>Astronomy:</h4>
      <h5>sun data:</h5><ul>
        <li>sunrise:</li>
        <li>sunset:</li>
        <li>civil dawn:</li>
        <li>civil dusk:</li>
        <li>astronomical dawn:</li>
        <li>astronomical dusk:</li>
      </ul>
      <h5>moon data:</h5><ul>
        <li>current phase:</li>
        <li>percentage:</li>
        <li>moonrise:</li>
        <li>moonset:</li>
      </ul>
      <hr/>
      
      <h4>Weather:</h4>
      <p>temperature:</p>
      <p>cloud cover:</p>
      <p>humidity:</p>
      <p>precipitation:</p>
      <p>visibility/seeing:</p>
    </div>
  )
}

export default LocationForecast;