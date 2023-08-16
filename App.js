import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/Login';
import Home from './src/pages/Home';
import CustomCamera from './src/CustomCamera';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='login' >
        <Stack.Screen name="login" component={Login} options={{
          headerShown:false
        }} />
        <Stack.Screen name="home" component={Home}  options={{
          headerTitleStyle:{
             color:'white'
          },
          headerStyle:{          
            backgroundColor:'#2B3038',           
            
          },
        
        }} />

        <Stack.Screen name="customCamera" component={CustomCamera} options={{
          
        }} />

      </Stack.Navigator>
    </NavigationContainer>

  );
}

