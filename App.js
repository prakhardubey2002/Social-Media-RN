import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { useState,useEffect } from 'react';
import * as Font from 'expo-font';
import { createStackNavigator } from '@react-navigation/stack';
import Comment from './assets/Screens/Comment';
import { NavigationContainer } from '@react-navigation/native';
import Sce from './assets/Screens/Sce';
const Stack = createStackNavigator();
export default function App() {

  const [isFontLoaded, setIsFontLoaded] = useState(false);

  useEffect(() => {
    Font.loadAsync({
      Poppins: require('./assets/fonts/Poppins-Regular.ttf'),
      PoppinsSemiBold: require('./assets/fonts/Poppins-SemiBold.ttf'),
      PoppinsBold: require('./assets/fonts/Poppins-Bold.ttf'),
    })
      .then(() => {
        setIsFontLoaded(true)
      });
  }, []);

  if(!isFontLoaded) return null;

  if(isFontLoaded) return (
    <NavigationContainer>
    {/* <View style={styles.container}> */}
      {/* <Text>Jai Shree Ram</Text>
      <Button
        title="Go to Details"
        
        onPress={() => navigation.navigate('Home')}
      /> */}
      <Stack.Navigator initialRouteName="Comment">
      <Stack.Screen name="Comment" component={Comment}  />
      <Stack.Screen name="Sce" component={Sce}  />
      
    </Stack.Navigator>
      <StatusBar style="auto" />
    {/* </View> */}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
