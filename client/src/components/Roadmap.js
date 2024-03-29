import React, { Component } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, DirectionsRenderer } from "react-google-maps";
import { GOOGLE_MAP_URL } from '../constants/api';
import roadmap from '../services/roadmap';

export default class Roadmap extends Component {
  constructor() {
    super();
    this.state = {
      directions: []
    };
  }
  async componentWillReceiveProps(props) {
    if (!props.locations.length) return;
    const config = roadmap.getDirectionsServiceConfig(props.locations);
    const directions = await roadmap.getDirectionsService(config);
    this.setState({ directions });
  }
  render() {
    const MapComponent = withScriptjs(withGoogleMap((props) =>
      <GoogleMap
        defaultZoom={14}
        defaultCenter={{ lat: -23.220727, lng: -45.901876 }} >
        <DirectionsRenderer directions={this.state.directions} />
      </GoogleMap>
    ));
    return (
      <MapComponent
        isMarkerShown
        googleMapURL={GOOGLE_MAP_URL}
        loadingElement={<div className='full-width full-height' />}
        containerElement={<div className='full-width full-height' />}
        mapElement={<div className='full-width full-height' />}
      />
    );
  }
}