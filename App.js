import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import ListScreen from './Screens/MainScreen';
import Splash from './Screens/SplashScreen';


const Stack = createNativeStackNavigator();

const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Screen 1'
          component={Splash}
          options={{
            header: () => null,
          }} />

        <Stack.Screen
          name='Screen 2'
          component={ListScreen}
          options={{
            header: () => null,
          }}
        />


      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default App;
