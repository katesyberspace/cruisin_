import React from 'react'
import GoogleMapReact from 'google-map-react'

function Map(props){
  const center = {
        lat: 59,
        lng: 30
      }
  const zoom = 11
    
  const Country = ({text})=> <div>{text}</div>

  return(

      <div style={{ height: '40vh', width: '60vw' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ 
            key: 'AIzaSyCRTzqlnbEg_QdyDMViNvtIxzE5-1Ehlwg',
            language: 'en'
          }}
          defaultCenter={center}
          defaultZoom={11}
        >
          <Country
            lat={props.coords.lat}
            lng={props.coords.long}
            text={''}
          />
        </GoogleMapReact>
      </div>

  )


}

export default Map