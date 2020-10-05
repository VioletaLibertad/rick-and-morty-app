import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import * as routes from './src/routes';
import Home from './src/app/screens/Home';
import CharacterDetail from './src/app/screens/CharacterDetail';
import { pacificBlue, black } from './src/constants/colors';

const Stack = createStackNavigator();

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
    this.setState({ isReady: true });
  }

  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }

    return (
      <NavigationContainer>
        <Stack.Navigator 
          screenOptions={{
            title: 'Rick and Morty Info',
            headerStyle: {
              backgroundColor: pacificBlue
            },
            headerTintColor: black
          }}
        >
          <Stack.Screen 
            name={routes.HOME} 
            component={Home}
          />
          <Stack.Screen 
            name={routes.CHARACTER_DETAIL} 
            component={CharacterDetail}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
