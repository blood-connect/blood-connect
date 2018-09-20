import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Font, LinearGradient } from 'expo';

import styles from '../styles/HomeScreenStyle';

class HomeScreen extends Component {
  state = {
    fontLoaded: false,
    donate: '',
    request: '',
  };

  async componentDidMount() {
    await Font.loadAsync({
      'lato-bold': require('../../assets/fonts/Lato-Bold.ttf'),
      'lato-hairline': require('../../assets/fonts/Lato-Hairline.ttf'),
      'lato-light': require('../../assets/fonts/Lato-Light.ttf'),
      'lato-regular': require('../../assets/fonts/Lato-Regular.ttf'),
      icomoon: require('../../assets/fonts/icomoon.ttf'),
    });
    const donate = await require('../../assets/icons/donate.png');
    const request = await require('../../assets/icons/request.png');

    this.setState({
      fontLoaded: true,
      donate,
      request,
    });
  }
  render() {
    return (
      <View style={styles.Back}>
        <TouchableOpacity style={styles.Request}>
          <Image
            source={require('../../assets/icons/request.png')}
            resizeMode="contain"
            style={styles.RequestImage}
          />
          <Text style={styles.RequestHeading}>REQUEST BLOOD</Text>
          <Text style={styles.RequestSubHeading}>TAP HERE TO REQUEST FOR BLOOD</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.Donate}>
          <LinearGradient
            colors={['#990003', '#CF0003']}
            style={{ height: '100%', width: '100%', position: 'absolute' }}
            start={[0, 1]}
            end={[0.75, 1]}
          />
          <Image
            source={require('../../assets/icons/donate.png')}
            resizeMode="contain"
            style={styles.DonateImage}
          />
          <Text style={styles.DonateHeading}>DONATE BLOOD</Text>
          <Text style={styles.DonateSubHeading}>TAP HERE TO ENROLL FOR BLOOD DONATION</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default HomeScreen;
