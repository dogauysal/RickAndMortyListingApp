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
import { Provider } from 'mobx-react';
import { NativeBaseProvider, Spinner } from 'native-base';
import React from 'react';
import RootStack from './src/routes/RootStack';
import { RootStoreContext } from './src/stores/rootStore';


const App = () => {

  return (
    <Provider {...RootStoreContext}>
      <NativeBaseProvider>
        <NavigationContainer>
          <RootStack />
        </NavigationContainer>
      </NativeBaseProvider>
    </Provider>
  );
};


export default App;
