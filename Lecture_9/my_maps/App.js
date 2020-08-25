import React from 'react';
import { StyleSheet, TextInput, View, Button } from 'react-native';
import MapView from './components/map_view';
import axios from 'axios';

export default function App() {
  const [searchQ, setSearchQ] = React.useState('')
  const [result, setResult] = React.useState(null)

  const onSearch = async () => {
    const resp = await axios.get('https://api.opencagedata.com/geocode/v1/json', {
      params: {
        q: searchQ,
        key: '39129b3cddb64724961ccfb4cf3d9144'
      }
    })
    setResult(resp.data.results[0])
  }
  
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row' }}>
        <TextInput 
          style={{ flexGrow: 1 }} 
          value={searchQ}
          onChangeText={setSearchQ}
        />
        <Button title="Search" onPress={onSearch} />
      </View>
      {result && <View style={styles.map}>
        <MapView 
          lat={result.geometry.lat}
          long={result.geometry.lng}
        />
      </View>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  map: {
    flexGrow: 1,
  },
});
