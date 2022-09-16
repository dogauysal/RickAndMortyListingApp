/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import { NativeBaseProvider } from 'native-base';
import React from 'react';
import RootStack from './src/routes/RootStack';

const App = () => {

  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
    </NativeBaseProvider>

  );
};


export default App;
