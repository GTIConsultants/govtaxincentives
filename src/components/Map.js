import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

class MapComponent extends Component {
    render() {
        const mapStyles = {
            width: '100%',
            height: '450px',
        };
        return (
            <Map
                google={this.props.google}
                zoom={15}
                style={mapStyles}
                initialCenter={{ lat: 51.374868, lng: -0.090273 }}
            >
                <Marker position={{ lat: 51.374868, lng: -0.090273 }} />
            </Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyDglHDWFK2YhXclSM2za0jz5pYG64QnFTA'
})(MapComponent);
