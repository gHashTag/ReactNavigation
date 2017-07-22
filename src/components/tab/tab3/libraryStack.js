import { StackNavigator } from 'react-navigation'
import Library from './library.js'

const LibraryStack = StackNavigator({
  Home: { screen: Library }
}, {
    navigationOptions: {
        title: 'Библиотека',
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

export default LibraryStack
