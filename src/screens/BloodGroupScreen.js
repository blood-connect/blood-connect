import React, { Component } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import { Font, LinearGradient } from 'expo';

import styles from '../styles/BloodGroupScreenStyle';

class BloodGroupScreen extends Component {
  state = {
    fontLoaded: false,
  };

  async componentDidMount() {
    await Font.loadAsync({
      'lato-bold': require('../../assets/fonts/Lato-Bold.ttf'),
      'lato-hairline': require('../../assets/fonts/Lato-Hairline.ttf'),
      'lato-light': require('../../assets/fonts/Lato-Light.ttf'),
      'lato-regular': require('../../assets/fonts/Lato-Regular.ttf'),
      icomoon: require('../../assets/fonts/icomoon.ttf'),
    });

    this.setState({
      fontLoaded: true,
    });
  }

  render() {
    return (
      <SafeAreaView style={styles.Back}>
        {this.state.fontLoaded ? (
          <View style={styles.BackArea}>
            <View style={styles.HeadingArea}>
              <Text style={styles.Heading}>BLOOD GROUP</Text>
              <Text style={styles.SubHeading}>Please select your Blood Group</Text>
            </View>
            <View style={styles.MainArea}>
              <View style={styles.Row}>
                <TouchableOpacity
                  style={styles.BloodGroup}
                  onPress={() => this.props.navigation.navigate('home')}>
                  <LinearGradient
                    colors={['#990003', '#CF0003']}
                    style={{ height: 100, width: 100, position: 'absolute' }}
                    start={[0, 1]}
                    end={[0.75, 1]}
                  />
                  <Text style={styles.BloodGroupText}>A+</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.BloodGroup}
                  onPress={() => this.props.navigation.navigate('home')}>
                  <LinearGradient
                    colors={['#990003', '#CF0003']}
                    style={{ height: 100, width: 100, position: 'absolute' }}
                    start={[0, 1]}
                    end={[0.75, 1]}
                  />
                  <Text style={styles.BloodGroupText}>A-</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.Row}>
                <TouchableOpacity
                  style={styles.BloodGroup}
                  onPress={() => this.props.navigation.navigate('home')}>
                  <LinearGradient
                    colors={['#990003', '#CF0003']}
                    style={{ height: 100, width: 100, position: 'absolute' }}
                    start={[0, 1]}
                    end={[0.75, 1]}
                  />
                  <Text style={styles.BloodGroupText}>B+</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.BloodGroup}
                  onPress={() => this.props.navigation.navigate('home')}>
                  <LinearGradient
                    colors={['#990003', '#CF0003']}
                    style={{ height: 100, width: 100, position: 'absolute' }}
                    start={[0, 1]}
                    end={[0.75, 1]}
                  />
                  <Text style={styles.BloodGroupText}>B-</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.Row}>
                <TouchableOpacity
                  style={styles.BloodGroup}
                  onPress={() => this.props.navigation.navigate('home')}>
                  <LinearGradient
                    colors={['#990003', '#CF0003']}
                    style={{ height: 100, width: 100, position: 'absolute' }}
                    start={[0, 1]}
                    end={[0.75, 1]}
                  />
                  <Text style={styles.BloodGroupText}>AB+</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.BloodGroup}
                  onPress={() => this.props.navigation.navigate('home')}>
                  <LinearGradient
                    colors={['#990003', '#CF0003']}
                    style={{ height: 100, width: 100, position: 'absolute' }}
                    start={[0, 1]}
                    end={[0.75, 1]}
                  />
                  <Text style={styles.BloodGroupText}>AB-</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.Row}>
                <TouchableOpacity
                  style={styles.BloodGroup}
                  onPress={() => this.props.navigation.navigate('home')}>
                  <LinearGradient
                    colors={['#990003', '#CF0003']}
                    style={{ height: 100, width: 100, position: 'absolute' }}
                    start={[0, 1]}
                    end={[0.75, 1]}
                  />
                  <Text style={styles.BloodGroupText}>O+</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.BloodGroup}
                  onPress={() => this.props.navigation.navigate('home')}>
                  <LinearGradient
                    colors={['#990003', '#CF0003']}
                    style={{ height: 100, width: 100, position: 'absolute' }}
                    start={[0, 1]}
                    end={[0.75, 1]}
                  />
                  <Text style={styles.BloodGroupText}>O-</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ) : null}
      </SafeAreaView>
    );
  }
}

export default BloodGroupScreen;
