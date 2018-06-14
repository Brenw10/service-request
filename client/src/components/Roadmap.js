import React, { Component } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, DirectionsRenderer } from "react-google-maps";
import api from '../constants/api';
import roadmap from '../services/roadmap';

export default class Roadmap extends Component {
  constructor() {
    super();
    this.state = {
      directions: []
    };
  }
  async componentWillReceiveProps(props) {
    const config = roadmap.getDirectionsServiceConfig(props.locations);
    const directions = await roadmap.getDirectionsService(config);
    this.setState({ directions });
  }
  render() {
    const MyMapComponent = withScriptjs(withGoogleMap((props) =>
      <GoogleMap
        defaultZoom={14}
        defaultCenter={{ lat: -23.220727, lng: -45.901876 }} >
        <DirectionsRenderer directions={this.state.directions} />
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