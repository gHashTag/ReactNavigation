import { StackNavigator } from 'react-navigation'
import TimePad from './timepad.js'

const TicketStack = StackNavigator({
  Home: { screen: TimePad }
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

export default TicketStack
