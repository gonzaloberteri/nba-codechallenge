import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {PlayerListScreen, TeamListScreen} from './screens';
import { RootStackParamList } from './types/navigation';

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="TeamList" component={TeamListScreen} options={{title: 'NBA Teams'}} />
      <Stack.Screen name="PlayerList"  component={PlayerListScreen} options={{title: 'Players'}}/>
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;
