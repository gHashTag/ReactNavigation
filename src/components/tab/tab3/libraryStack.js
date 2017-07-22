import React from 'react';
import { Button, ScrollView } from 'react-native';
import { StackNavigator } from 'react-navigation';

import Library from './library.js'

const MyNavScreen = ({ navigation, banner }) => (
  <ScrollView>
    <Button
      onPress={() => navigation.navigate('Photos')}
      title="Go to a photos screen"
    />
  </ScrollView>
);

const MyHomeScreen = ({ navigation }) => (
  <MyNavScreen banner="Home Screen" navigation={navigation} />
);

MyHomeScreen.navigationOptions = {
 title: 'Библиотека',
};

const MyLibraryScreen = ({ navigation }) => (
  <Library />
);
MyLibraryScreen.navigationOptions = {
  title: 'Photos',
};


const LibraryStack = StackNavigator({
  Home: {
    screen: MyHomeScreen,
  },
  Photos: {
    screen: MyLibraryScreen,
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

export default LibraryStack;
