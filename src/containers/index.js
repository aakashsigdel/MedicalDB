import React, { Component } from 'react'
import {
  BackAndroid,
  StyleSheet,
  Platform,
  View
} from 'react-native'
import Search from './Search'
import { Actions } from 'react-native-router-flux'


class App extends Component {
  init = () => {
    this.registerBackButtonAndroid()
  }

  registerBackButtonAndroid = () => {
    if(Platform.OS === 'android') {
      BackAndroid.addEventListener('hardwareBackPress', function() {
        try {
          Actions.pop();
          return true;
        }
        catch (err) {
          return false;
        }
      })
    }

  }

  componentWillMount = this.init

  render = () =>
    <View style={styles.container}>
      <Search />
      </View>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#70A1D7'
  }
})

export default App
