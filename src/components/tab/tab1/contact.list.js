import React, { Component } from 'react';
import {
  Text,
  View,
  Dimensions,
  ListView,
  Image,
  TouchableHighlight
} from 'react-native';

import {StackNavigator} from 'react-navigation'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const win = Dimensions.get('window');

export default class ContectList extends Component {
  static navigationOptions = {
    title: '#шактиМамочки',
  };
  constructor(props){
    super(props)
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      userDataSource: ds,
      user:'Geya'
    }
  }
  renderRow(user, sectionId, rowId, highlightRow){

    const { imageStyle, titleContainer, chevron, posterText } = styles
   
    return (
      <TouchableHighlight onPress={() => this.navigate('ContactDetails', { user: user })} >
        <View style={styles.row}>
         <Image style={imageStyle} source={{uri: user.large }}>
         <View style={titleContainer}>
          <Text style={posterText}>{user.name}</Text>
         <Icon style={chevron} name="chevron-right" size={60} color="#fff" />
         </View>
        </Image>
        </View>
      </TouchableHighlight>
    )
  }

  componentDidMount(){
    this.fetchUsers()
  }
  fetchUsers(){
   fetch('https://firebasestorage.googleapis.com/v0/b/shaktimams.appspot.com/o/shakti.json?alt=media&token=e8e34bbb-b0b8-4aa8-9f8a-8474bd738b70')
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          userDataSource: this.state.userDataSource.cloneWithRows(res)
        })
      })
  }

  render() {
    const { navigate } = this.props.navigation;
    this.navigate = navigate
    return (
      <View>
        <ListView
          dataSource={this.state.userDataSource}
          renderRow={this.renderRow.bind(this)}
        />
      </View>
    );
  }
}

const styles = {
  imageStyle: {
    alignSelf: 'stretch',
    width: win.width,
    height: win.width-20, 
    resizeMode: 'cover',
 },
  titleContainer: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  posterText: {
    fontFamily: 'AppleSDGothicNeo-Light',
    fontWeight: '100',
    marginLeft: 20,
    marginBottom: 25,
    color: '#fff',
    alignItems: 'center',
    fontSize: 18,
    alignSelf: 'flex-end'
  },
  chevron: {
    alignSelf: 'flex-end',
  }
}
