import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import axios from 'axios';

export default props => {
  const profile = props.profile
  const [repos, setRepos] = React.useState([])

  React.useEffect(() => {
    (async () => {
      const repos = await axios.get(profile.repos_url)

      setRepos(repos.data)
    })()
  }, [])

  return <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>{profile.name}</Text>
    <Image 
      style={{ height: 50, width: 50 }}
      source={{ uri: profile.avatar_url }}
    />
    <Text>
      {profile.bio}
    </Text>

    <View>
      {repos.map(repo => <Text>
        {repo.full_name}
      </Text>)}
    </View>
  </View>
}

const style = StyleSheet.create({})
