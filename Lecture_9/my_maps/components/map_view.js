import React from 'react';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

export default props => {
  const lat = props.lat
  const long = props.long

  return <MapView
    style={{flex: 1}}
    provider={PROVIDER_GOOGLE} // remove if not using Google Maps
    region={{
      latitude: lat,
      longitude: long,
      latitudeDelta: 0.015,
      longitudeDelta: 0.0121,
    }}
  >
  </MapView>
}
