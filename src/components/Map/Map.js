import React from 'react';
import ReactMapboxGl, {Layer, Feature} from 'react-mapbox-gl';
import './map.scss';

const Map = ReactMapboxGl({
  accessToken: 'pk.eyJ1IjoiYWxleHJlZDIwMjAiLCJhIjoiY2s5encyNzFvMGJ0ejNncGU1YXpyeWlpdyJ9.GDLbubIZBweoM4j4CsidPw',
});

const MyMap = props => {
  return (
    <Map
      style="mapbox://styles/mapbox/light-v10"
      containerStyle={{
        height: '100vh',
        width: '100vw'
      }}
      center={[35.138268, 47.841110]}
      zoom={[1.5]}
    >

    </Map>
  );
};

export default MyMap;
