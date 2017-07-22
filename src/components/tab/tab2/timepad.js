import React, { Component  } from 'react';
import { 
 WebView, 
} from 'react-native';

export default class Ticket extends Component {
 render() {
  return (
    <WebView 
      source={require('./timepad.html')}
    />
  );
 }
}
