import {StyleSheet} from 'react-native';

const secondaryColor = '#00162A';
const primaryColor = '#4A1B05';
const white = '#FFF';
const successColor = "#4F8A10"
const successBackground = "#DFF2BF"
const errorColor = "#D8000C"
const errorBackground = "#FFD2D2"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
  },
  header: {
    width: '100%',
    height: 162,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 18,
  },
  body: {
    marginTop: 18,
    width: '80%',
    alignSelf: 'center',
  },
  visibilityBtn: {
    position: 'absolute',
    right: 10,
    height: 25,
    width: 25,
    padding: 0,
    marginTop: 8
  },
  btnImage: {
    resizeMode: 'contain',
    height: '100%',
    width: '100%',
    marginTop: 7,
  },
  logText: {
    color: '#272727',
    fontSize: 14,
    marginTop: 20,
  },
  logRequest: {
    flexDirection: 'row', 
    alignSelf:'center',
     marginTop: 9
  }
});

export {styles, secondaryColor, successBackground, successColor, errorBackground, errorColor, primaryColor};
