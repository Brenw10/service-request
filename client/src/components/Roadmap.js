import React, { Component } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";
import api from '../constants/api';
import geolocation from '../services/geolocation';

export default class Roadmap extends Component {
  render() {
    geolocation.getDirectionsService(this.props.locations).then(console.log);

    const MyMapComponent = withScriptjs(withGoogleMap((props) =>
      <GoogleMap
        defaultZoom={14}
        defaultCenter={{ lat: -23.220727, lng: -45.901876 }} >
      </GoogleMap>
    ));
    return (
      <MyMapComponent
        isMarkerShown
        googleMapURL={api.GOOGLE_MAP_URL}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `400px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    );
  }
}