import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  Back: {
    height: '100%',
    backgroundColor: '#FFFFFF',
    zIndex: 0,
    flex: 1,
  },
  Request: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Donate: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  RequestImage: {
    height: 100,
  },
  DonateImage: {
    height: 100,
  },
  RequestHeading: {
    fontFamily: 'lato-light',
    fontSize: 25,
    color: '#000000',
    marginTop: 20,
  },
  RequestSubHeading: {
    fontFamily: 'lato-regular',
    fontSize: 12,
    color: '#AFAFAF',
  },
  DonateHeading: {
    fontFamily: 'lato-light',
    fontSize: 25,
    color: '#FFFFFF',
    marginTop: 20,
  },
  DonateSubHeading: {
    fontFamily: 'lato-light',
    fontSize: 12,
    color: '#FFFFFF',
  },
});

export default styles;
