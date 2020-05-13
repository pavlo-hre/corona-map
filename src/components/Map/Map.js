import React, {useContext, useMemo} from 'react';
import ReactMapboxGl, {
  Layer,
  Feature,
  Popup,
} from 'react-mapbox-gl';
import {CountriesContext} from '../../context/countries/context';
import InfoBlock from '../InfoBlock/InfoBlock';
import './map.scss';


const Map = ReactMapboxGl({
  accessToken: 'pk.eyJ1IjoiYWxleHJlZDIwMjAiLCJhIjoiY2thM3JrMWtxMDE2bDNlbzI4Znc0ZmhpeiJ9.4ZW9KwKskCOE6Srte2z7rQ',
  minZoom: 1.3,
});

const MyMap = () => {
  const {
    countries, location, setLocation, mode, changeLoading, lastLocation
  } = useContext(CountriesContext);

  const zone1 = useMemo(
    () => countries.filter(el => el.cases < 1000),
    [countries]);
  const zone2 = useMemo(
    () => countries.filter(el => el.cases >= 1000 && el.cases < 10000),
    [countries]);
  const zone3 = useMemo(
    () => countries.filter(el => el.cases >= 10000 && el.cases < 100000),
    [countries]);
  const zone4 = useMemo(
    () => countries.filter(el => el.cases >= 100000 && el.cases < 1000000),
    [countries]);
  const zone5 = useMemo(
    () => countries.filter(el => el.cases >= 1000000),
    [countries]);

  const createMarkers = (data, markerOptions) => {
    const {color, radius} = markerOptions;
    return (<Layer
      type="circle"
      paint={{
        'circle-color': color,
        'circle-opacity': 0.5,
        'circle-radius': radius,
      }}
    >
      {
        data.map(item => (
          <Feature
            key={item.name}
            coordinates={item.latlng}
            onClick={() => setLocation(item)}
          />))
      }
    </Layer>);
  };

  return (
    <Map
      style={`mapbox://styles/mapbox/${mode}-v10`}
      containerStyle={{
        height: '100vh',
        width: '100vw'
      }}
      center={
        location
          ? location.latlng
          : lastLocation
          ? lastLocation.latlng
          : [32, 49]
      }
      zoom={[location ? 4 : 2]}
      onStyleLoad={changeLoading}
    >
      {
        createMarkers(zone1, {color: '#58742e', radius: 7})
      }
      {
        createMarkers(zone2, {color: '#f79400', radius: 12})
      }
      {
        createMarkers(zone3, {color: '#f76300', radius: 20})
      }
      {
        createMarkers(zone4, {color: '#ac2d2d', radius: 30})
      }
      {
        createMarkers(zone5, {color: '#fa0000', radius: 50})
      }
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
