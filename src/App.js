import React,{useEffect,useState} from "react";
import './App.css';
import GoogleMapReact from 'google-map-react';
const AnyReactComponent = ({ text }) => <div>{text}</div>;

function App() {
  const defaultProps = {
    center: {
      // lat: 11.2588,
      // lng: 75.7804
    },
    zoom: 11
  };

  const [lat,setlat] = useState()
  const [long,setlong] = useState()
  const [coords,setcoords] = useState({})
  

  const onTextChange = (e)=>{
    console.log("ee",e.target.value)
    if(e.target.name === "lat")
    {
      setlat(e.target.value)
    }
    else{
      setlong(e.target.value)
    }
  }

  const submitBtn=()=>{
    setcoords({
      lat: parseFloat(lat),
      lng: parseFloat(long)
    })
  }
  
  return (
    <div className="App">
      <div style={{ height: '400px', width: '400px' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyBHYJlzoMf9fPj6MIAlUYC3RnS8rmqHtkg" }}
        defaultCenter={defaultProps.center}
        center={coords}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={11.2588}
          lng={75.7804}
          text="My Marker"
        />
      </GoogleMapReact>
    </div>
    <div style={{ height: '400px', width: '400px' }}>
    <br/>
      Lat <input type="text" name="lat" value={lat} onChange={onTextChange}/><br/><br/>
      Lon <input type="text" name="long" value={long} onChange={onTextChange} /><br/><br/>
       <input type="button" name="btn" class="button" value="Search" onClick={submitBtn}/>
      
    </div>
    </div>
  );
}

export default App;
