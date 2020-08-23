import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import axios from 'axios';

import GithubProfile from './components/github_profile';

export default function App() {
  const [githubUsername, setGithubUsername] = React.useState('')
  const [githubProfile, setGithubProfile] = React.useState(null)
  const [loading, setLoading] = React.useState(false)

  const fetchGithubUser = async () => {
    setLoading(true)
    try {
      const resp = await axios.get(`https://api.github.com/users/${githubUsername}`)
      setGithubProfile(resp.data)
    } catch (err) {

    } finally {
      setLoading(false)
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.mainText}>Search a Github Profile</Text>
      <View style={{ flexDirection: 'row', marginTop: 10 }}>
        <TextInput
          style={styles.textInput}
          onChangeText={setGithubUsername}
          value={githubUsername}
        />
        <View style={styles.button}>
          <Button
            onPress={fetchGithubUser}
            title="Search"
            color="#841584"
          />
        </View>
      </View>

      {loading && <Text>Loading ...</Text>}

      {githubProfile && <View style={{ marginTop: 10 }}>
        <GithubProfile profile={githubProfile} />
      </View>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  mainText: {
    color: 'red'
  },
  textInput: {
    height: 40,
    borderWidth: 2
  },
  button: {
    marginLeft: 10
  }
});
