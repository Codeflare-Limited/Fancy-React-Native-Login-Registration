import React, {Component} from 'react';
import {View, Image, Text, TouchableOpacity, StatusBar} from 'react-native';
import {
  styles,
  errorBackground,
  errorColor,
  successBackground,
  successColor,
  primaryColor,
} from '../assets/styles/Style';
import CircleButton from '../components/CircleButton';
import Snackbar from 'react-native-snackbar';
import {Input, Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/AntDesign';
Icon.loadFont();

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hidePassword: false,
      UserPassword: '',
      Username: '',
    };
  }

  managePasswordVisibility = () => {
    this.setState({hidePassword: !this.state.hidePassword});
  };

  login = () => {
    const {UserPassword, Username} = this.state;
    if (Username === '') {
      Snackbar.show({
        backgroundColor: errorBackground,
        textColor: errorColor,
        text: 'Please enter your username',
        duration: Snackbar.LENGTH_INDEFINITE,
        action: {
          text: 'OK',
          textColor: errorColor,
        },
      });
    } else if (UserPassword === '') {
      Snackbar.show({
        backgroundColor: errorBackground,
        textColor: errorColor,
        text: 'Please enter your password',
        duration: Snackbar.LENGTH_INDEFINITE,
        action: {
          text: 'OK',
          textColor: errorColor,
        },
      });
    } else {
      Snackbar.show({
        backgroundColor: successBackground,
        textColor: successColor,
        text: `Hello ${Username}. Your password is ${UserPassword}`,
        duration: Snackbar.LENGTH_INDEFINITE,
        action: {
          text: 'OK',
          textColor: successColor,
        },
      });
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor={primaryColor} />
        <View style={styles.header}>
          <CircleButton
            circleDiameter={72}
            gradientColors={['#C1564C', '#DEA01E', '#00162A']}>
            <Icon name="user" size={33} />
          </CircleButton>
        </View>
        <View style={styles.body}>
          <Input
            placeholder="Username"
            leftIcon={<Icon name="user" size={24} color="black" />}
            onChangeText={Username => this.setState({Username})}
          />

          <View>
            <Input
              secureTextEntry={this.state.hidePassword}
              placeholder="Password"
              leftIcon={<Icon name="lock" size={24} color="black" />}
              onChangeText={UserPassword => this.setState({UserPassword})}
            />
            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.visibilityBtn}
              onPress={this.managePasswordVisibility}>
              <Image
                source={
                  this.state.hidePassword
                    ? require('../assets/images/show.png')
                    : require('../assets/images/hide.png')
                }
                style={styles.btnImage}
              />
            </TouchableOpacity>
          </View>
          <TouchableOpacity>
            <Text
              style={{
                position: 'relative',
                top: 3,
                width: '100%',
                fontSize: 12,
                marginLeft: 190,
                marginBottom: 18,
                color: 'red',
              }}>
              Forgot password?
            </Text>
          </TouchableOpacity>
          <Button
            buttonStyle={{marginTop: 36, padding: 11}}
            title="Sign in"
            onPress={() => this.login()}
          />
          <View style={styles.logRequest}>
            <Text style={[styles.logText, {color: 'rgb(9,28,48)'}]}>
              Don't have an account?
            </Text>
            <View></View>
            <View></View>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Register')}>
              <Text style={[styles.logText, {color: 'red', marginLeft: 4}]}>
                Sign up
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

export default Login;
