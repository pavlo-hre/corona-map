import React, {useContext, useEffect} from 'react';
import ReactMapboxGl, {
  Layer,
  Feature, Popup,
} from 'react-mapbox-gl';
import './map.scss';
import {CountriesContext} from '../../context/countries/context';
import InfoBlock from '../InfoBlock/InfoBlock';


const Map = ReactMapboxGl({
  accessToken: 'pk.eyJ1IjoiYWxleHJlZDIwMjAiLCJhIjoiY2thM3JrMWtxMDE2bDNlbzI4Znc0ZmhpeiJ9.4ZW9KwKskCOE6Srte2z7rQ',
});

const MyMap = () => {
  let {countries, location, getData, setLocation} = useContext(CountriesContext);

  // const dangerZone = countries.filter(el=>el.cases>1000)
  // const mediumZone = countries.filter(el=>el.cases<=800 && el.cases >700)

  useEffect(async () => {
    getData();
  }, []);
  // console.log(location);

  const markers = countries.map(item => (
    <Feature
      key={item.name}
      coordinates={item.latlng}
      onClick={() => {
        setLocation(item);
      }}
    />));
  // console.log(markers);
  return (
    <Map
      style="mapbox://styles/mapbox/light-v10"
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
          'circle-radius': 18,
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
