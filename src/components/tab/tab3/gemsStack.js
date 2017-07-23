import React from 'react';
import { Button, ScrollView } from 'react-native';
import { StackNavigator } from 'react-navigation';

import Gems from './gems.js'

const MyNavScreen = ({ navigation, banner }) => (
  <ScrollView>
    <Button
      onPress={() => navigation.navigate('Photos')}
      title="Leela Game"
    />
  </ScrollView>
);

const MyHomeScreen = ({ navigation }) => (
  <MyNavScreen banner="Home Screen" navigation={navigation} />
);

MyHomeScreen.navigationOptions = {
 title: 'Сокровища',
};

const MyGemsScreen = ({ navigation }) => (
  <Gems />
);
MyGemsScreen.navigationOptions = {
  title: 'Photos',
};


const GemsStack = StackNavigator({
  Home: {
    screen: MyHomeScreen,
  },
  Photos: {
    screen: MyGemsScreen,
  },
}, {
    navigationOptions: {
        title: 'Билет',
        headerStyle: {
            backgroundColor: '#fff'
        },
        headerTitleStyle: {
          fontFamily: 'AppleSDGothicNeo-Light',
          paddingTop: 3,
          fontSize: 16,
          fontWeight: '100',
          color: '#000'
        },
        headerTintColor: '#000',
        headerBackTitleStyle: {
          color: '#474747'
        }
    }
});

export default GemsStack;
