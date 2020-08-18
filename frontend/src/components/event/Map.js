import React from 'react'
import MapGl, { Marker } from 'react-map-gl'

import 'mapbox-gl/dist/mapbox-gl.css'

class Map extends React.Component {

state = {
  latitude: 23.456,
  longitude: -12.345
}

//* currently using personal access token, must get own before deployment

render() {
  return (
    <MapGl 
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
      height={'45vh'}
      width={'35vw'}
      mapStyle='mapbox://styles/mapbox/streets-v11'
      latitude={51.551}
      longitude={-0.348}
      zoom={13}
    >
      <Marker 
        latitude={51.551}
        longitude={-0.348}
      >
        <span role="img" aria-label="marker">😼</span>
      </Marker>
    </MapGl>
  )
}
}
export default Map