import *as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {HomeScreen} from './src/Presentation/views/home/Home';
import { RegisterScreen } from './src/Presentation/views/register/Register';
import { RecoveryRequisitionScreen } from './src/Presentation/views/recoveryRequisition/RecoveryRequisition';
import { RecoveryPasswordScreen } from './src/Presentation/views/recoveryPassword/RecoveryPassword';

export type RootStackParameList = {
  HomeScreen : undefined,
  RegisterScreen: undefined,
  RecoveryRequisitionScreen: undefined,
  RecoveryPasswordScreen: undefined,
}

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>

        <Stack.Screen 
        name='Home'
        component={HomeScreen}/>

        <Stack.Screen
        name="RegisterScreen"
        component={RegisterScreen}
        options={{
          headerShown:true,
          title:'Novo usuário',
        }}/>

        <Stack.Screen
        name="RecoveryRequisitionScreen"
        component={RecoveryRequisitionScreen}
        options={{
          headerShown:true,
          title:'Recuperação de senha',
        }}/>

        <Stack.Screen
        name="RecoveryPasswordScreen"
        component={RecoveryPasswordScreen}
        options={{
          headerShown:true,
          title:'Recuperar Senha',
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}


export default App;