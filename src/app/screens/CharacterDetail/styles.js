import { StyleSheet, Dimensions } from 'react-native';

const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  card_characterDetail: {
    flex: 1,
    alignSelf: 'center',
    width: '90%',
    height: windowHeight / 2,
    marginTop: 20,
    marginBottom: 30,
  },
  card_imgContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingTop: 10
  },
  image: {
    flex: 1,
    height: 500,
    width: '100%',
  },
})

export default styles;
