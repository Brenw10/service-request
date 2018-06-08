import React, { Component } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import api from '../constants/api';

export default class GoogleMaps extends Component {
    render() {
        const MyMapComponent = withScriptjs(withGoogleMap((props) =>
            <GoogleMap
                defaultZoom={14}
                defaultCenter={{ lat: -23.220727, lng: -45.901876 }} >
                {props.isMarkerShown && <Marker position={{ lat: -23.220727, lng: -45.901876 }} />}
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