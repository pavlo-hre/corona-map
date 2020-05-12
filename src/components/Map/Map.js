import React, {useContext, useMemo} from 'react';
import ReactMapboxGl, {
  Layer,
  Feature, Popup,
} from 'react-mapbox-gl';
import {CountriesContext} from '../../context/countries/context';
import InfoBlock from '../InfoBlock/InfoBlock';
import './map.scss';


const Map = ReactMapboxGl({
  accessToken: 'pk.eyJ1IjoiYWxleHJlZDIwMjAiLCJhIjoiY2thM3JrMWtxMDE2bDNlbzI4Znc0ZmhpeiJ9.4ZW9KwKskCOE6Srte2z7rQ',
});

const MyMap = () => {
  const {
    countries, location, setLocation, mode, changeLoading, lastLocation
  } = useContext(CountriesContext);

  const zone1 = useMemo(() => countries.filter(el => el.cases < 1000), [countries]);
  const zone2 = useMemo(() => countries.filter(el => el.cases >= 1000 && el.cases < 10000), [countries]);
  const zone3 = useMemo(() => countries.filter(el => el.cases >= 10000 && el.cases < 100000), [countries]);
  const zone4 = useMemo(() => countries.filter(el => el.cases >= 100000 && el.cases < 1000000), [countries]);
  const zone5 = useMemo(() => countries.filter(el => el.cases >= 1000000), [countries]);


  const getMarkers = data => data.map(item => (
    <Feature
      key={item.name}
      coordinates={item.latlng}
      onClick={() => setLocation(item)}
    />));

  return (
    <Map
      style={`mapbox://styles/mapbox/${mode}-v10`}
      containerStyle={{
        height: '100vh',
        width: '100vw'
      }}
      center={location ? location.latlng : lastLocation.latlng || [40, 20]}
      zoom={[location ? 4 : 2]}
      onStyleLoad={changeLoading}
    >
      <Layer
        type="circle"
        paint={{
          'circle-color': '#58742e',
          'circle-opacity': 0.5,
          'circle-radius': 7,
        }}
      >
        {getMarkers(zone1)}
      </Layer>
      <Layer
        type="circle"
        paint={{
          'circle-color': '#f79400',
          'circle-opacity': 0.5,
          'circle-radius': 12,
        }}
      >
        {getMarkers(zone2)}
      </Layer>
      <Layer
        type="circle"
        paint={{
          'circle-color': '#f76300',
          'circle-opacity': 0.5,
          'circle-radius': 20,
        }}
      >
        {getMarkers(zone3)}
      </Layer>
      <Layer
        type="circle"
        paint={{
          'circle-color': '#ac2d2d',
          'circle-opacity': 0.5,
          'circle-radius': 30,
        }}
      >
        {getMarkers(zone4)}
      </Layer>
      <Layer
        type="circle"
        paint={{
          'circle-color': '#fa0000',
          'circle-opacity': 0.35,
          'circle-radius': 60,
        }}
      >
        {getMarkers(zone5)}
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
