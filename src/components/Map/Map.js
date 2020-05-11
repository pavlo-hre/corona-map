import React, {useContext, useEffect} from 'react';
import ReactMapboxGl, {
  Layer,
  Feature, Popup,
} from 'react-mapbox-gl';
import './map.scss';
import {CountriesContext} from '../../context/countries/context';
import InfoBlock from '../InfoBlock/InfoBlock';


const Map = ReactMapboxGl({
  accessToken: 'pk.eyJ1IjoiYWxleHJlZDIwMjAiLCJhIjoiY2s5encyNzFvMGJ0ejNncGU1YXpyeWlpdyJ9.GDLbubIZBweoM4j4CsidPw',
});

const MyMap = () => {
  const {countries, location, getData, setLocation} = useContext(CountriesContext);

  useEffect(async () => {
    getData();
  }, []);

  const markers = countries && countries.map(item => (
    <Feature
      key={item.alpha2Code}
      coordinates={item.latlng}
      onClick={() => {
        setLocation(item);
      }}
    />));

  return (
    <Map
      style="mapbox://styles/mapbox/dark-v10"
      containerStyle={{
        height: '100vh',
        width: '100vw'
      }}
      center={location ? location.latlng : [40, 20]}
      zoom={[location ? 4 : 2]}
    >
      <Layer
        type="circle"
        paint={{
          'circle-color': 'red',
          'circle-opacity': 0.15,
          'circle-radius': 15,
        }}
      >
        {markers}
      </Layer>
      {
        location &&
        <Popup
          coordinates={location.latlng}
          anchor='top'
        >
          <div className='popup-header'>
            <img src={location.flag} alt={location.name}/>
            <h3>{location.nameRus}</h3>
            <span
              onClick={() => setLocation(null)}
            >
              &times;
            </span>
          </div>
          <InfoBlock {...location}/>
        </Popup>
      }
    </Map>
  );
};

export default MyMap;
