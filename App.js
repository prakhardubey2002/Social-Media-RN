import * as Font from 'expo-font';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, } from 'react-native';
import { useState, useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Setting from './Screens/Setting';
import Comment from './Screens/Comment';
import AddAddress from './Screens/AddAddress';
import Notification from './Screens/Notification';
import LikedPeople from './Screens/LikedPeople';
import ArStart from './Screens/ArStart';
import ARDatainput from './Screens/ArDatainput';
import ArSlider from './Screens/ArSlider';
import ChatBot from './Screens/ChatBot';
import AskQueries from './Screens/AskQueries';
import ChatBox from './Screens/ChatBox';
import MainChatBox from './Screens/MainChatBox';

const Stack = createStackNavigator();
export default function App() {

  const [isFontLoaded, setIsFontLoaded] = useState(false);

  useEffect(() => {
    Font.loadAsync({
      Poppins: require('./assets/fonts/Poppins-Regular.ttf'),
      PoppinsSemiBold: require('./assets/fonts/Poppins-SemiBold.ttf'),
      PoppinsBold: require('./assets/fonts/Poppins-Bold.ttf'),
      UrbanistRegular: require('./assets/fonts/Urbanist-Regular.ttf'),
      UrbanistBold: require('./assets/fonts/Urbanist-Bold.ttf'),
      UrbanistMedium: require('./assets/fonts/Urbanist-Medium.ttf'),
      UrbanistSemiBold: require('./assets/fonts/Urbanist-SemiBold.ttf'),
      Poppins_medium: require("./assets/fonts/Poppins_medium.ttf"),
      Poppins_black: require("./assets/fonts/Poppins_black.ttf"),
      Mulish_semibold: require("./assets/fonts/Mulish_semibold.ttf"),
      ABeeZee_regular: require("./assets/fonts/ABeeZee_regular.ttf"),
      ABeeZee_regular_italic: require("./assets/fonts/ABeeZee_regular_italic.ttf"),
      // UrbanistLight: require('./assets/fonts/Urbanist-Light.ttf'),
    })
      .then(() => {
        setIsFontLoaded(true)
      });
  }, []);

  if (!isFontLoaded) return null;

  if (isFontLoaded) return (
    <NavigationContainer>
      {/* <View style={styles.container}> */}
      {/* <Text>Jai Shree Ram</Text>
      <Button
        title="Go to Details"
        
        onPress={() => navigation.navigate('Home')}
      /> */}
      <Stack.Navigator initialRouteName="MainChatBox">
        <Stack.Screen name="Setting" component={Setting} />
        <Stack.Screen name="AddAddress" component={AddAddress} />
        {/* Social Media */}
        <Stack.Screen name="Comment" component={Comment} />
        <Stack.Screen name='Notification' component={Notification} />
        <Stack.Screen name='LikedPeople' component={LikedPeople} />
        <Stack.Screen name="AR" component={ArStart} />
        <Stack.Screen name='ArDatainput' component={ARDatainput} />
        <Stack.Screen name="ArSlider" component={ArSlider} />
        <Stack.Screen name="ChatBot" component={ChatBot} />
        <Stack.Screen name='AskQueries' component={AskQueries} />
        <Stack.Screen name="ChatBox" component={ChatBox} />
        <Stack.Screen name="MainChatBox" component={MainChatBox} />
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
