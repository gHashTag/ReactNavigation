import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  ScrollView,
 Image,
 Dimensions
} from 'react-native';

const win = Dimensions.get('window');

export default class ContactDetails extends Component {
  static navigationOptions = ({ navigation }) => ({
      title: `${navigation.state.params.user.name}`
    });

  render() {

   const { bioStyle, iconContainerStyle, nameText, professionText, container  } = styles
   const { name, bio, large, profession } = this.props.navigation.state.params.user

    return (
      <ScrollView>
       <Image 
          source={{uri: large }} style={iconContainerStyle} />
        <Text style={nameText}>{name}</Text>
        <Text style={professionText}>{profession}</Text>
        <Text style={bioStyle}>{bio}</Text>
      </ScrollView>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#000'
 },
  iconContainerStyle: {
    alignSelf: 'stretch',
    width: win.width,
    height: win.width
 },
  nameText: {
    paddingTop: 10,
    fontFamily: 'AppleSDGothicNeo-Light',
    backgroundColor: 'rgba(0,0,0,0)',
    color: '#000',
    fontWeight: '100',
    fontSize: 18,
    paddingTop: 20,
    marginLeft: 20,
  },
  professionText: {
    fontFamily: 'AppleSDGothicNeo-Light',
    backgroundColor: 'rgba(0,0,0,0)',
    color: '#000',
    fontWeight: '100',
    fontSize: 16,
    marginLeft: 20,
  },
  bioStyle: {
    fontFamily: 'AppleSDGothicNeo-Light',
    backgroundColor: 'rgba(0,0,0,0)',
    paddingTop: 10,
    color: '#474747',
    fontSize: 15,
    fontWeight: '100',
    padding: 20 
  },
}
