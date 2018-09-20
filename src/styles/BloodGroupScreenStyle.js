import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  Back: {
    height: '100%',
    backgroundColor: '#FFFFFF',
    zIndex: 0,
    flex: 1,
  },
  BackArea: {
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
  },
  HeadingArea: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Heading: {
    fontFamily: 'lato-light',
    fontSize: 30,
    textAlign: 'center',
  },
  SubHeading: {
    fontFamily: 'lato-regular',
    fontSize: 13,
    textAlign: 'center',
    color: '#AFAFAF',
  },
  MainArea: {
    flex: 7,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Row: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  BloodGroup: {
    margin: 10,
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: '#F5F5F5',
    justifyContent: 'center',
    alignSelf: 'center',
    padding: 20,
    height: 100,
    width: 100,
    borderRadius: 100,
    borderColor: '#AFAFAF',
    borderWidth: 0,
    overflow: 'hidden',
  },
  BloodGroupText: {
    textAlign: 'center',
    fontSize: 40,
    fontFamily: 'lato-light',
    color: '#FFFFFF',
  },
});

export default styles;
