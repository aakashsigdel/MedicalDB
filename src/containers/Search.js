import React, { Component } from 'react'
import {
  Image,
  StyleSheet,
  TextInput,
  View
} from 'react-native'
import Button from '../components/Button'

const SearchBar = () =>
  <View style={styles.searchBarWrapper}>
    <TextInput style={styles.searchBar} underlineColorAndroid={'transparent'} />
    <Image
      source={require('../../images/searchIcon.png')}
      style={styles.searchIcon}
    />
  </View>

export default class SearchPage extends Component {
  render () {
    return (
      <View style={styles.container}>
        <View />
        <SearchBar />
        <Button
          onPress={() => {}}
          backgroundColor={'#A1DE93'}
          color={'#FFF'}
          title={'CATEGORIES'}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  searchBar: {
    height: 48,
    backgroundColor: '#FFF',
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingRight: 35,
    paddingLeft: 20,
    borderColor: 'rgba(0, 0, 0, 0.1)',
    borderWidth: 1,
    borderRadius: 2
  },
  searchBarWrapper: {
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: {width: 0, height: 0},
    marginLeft: 15,
    marginRight: 15
  },
  searchIcon: {
    position: 'absolute',
    height: 18,
    width: 18,
    right: 20,
    top: 15
  },
})
