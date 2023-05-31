import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
// import {height,width} from '../assets/dimensions/Dimensions';
import Svg, { Path } from "react-native-svg"
export default function Setting({ navigation }) {
  useEffect(() => {
    navigation.setOptions({
      title: "Setting",
      headerHeight: 100,
      headerStyle: {
        backgroundColor: '#EC303A'
      },
      headerTintColor: '#fff',
      headerLeft: () => (
        <TouchableOpacity style={{
          marginLeft: 26
        }}
          onPress={navigation.goBack}
        >
          <Entypo name="cross" style={{ color: "#fff", paddingLeft: "40" }} size={24} />
        </TouchableOpacity>
      ),
      headerTitle: () => (
        <View style={{
          flexDirection: "row",
          alignItems: "center"
        }}>
          <Text style={{
            fontFamily: 'Poppins',
            fontStyle: 'normal',
            fontWeight: '700',
            fontSize: 14,
            lineHeight: 21,
            color: '#FFFFFF',
          }} >Settings</Text>
        </View>
      ),
    });

  }
    , []);
  return (
    <View style={styles.container}>
      <View>
        <Svg
          width={24}
          height={24}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M15.921 4.419a23.778 23.778 0 00-7.848 0 1.194 1.194 0 00-.973.94 35.64 35.64 0 00-.142 13.327l.163.912 3.67-3.487a1.75 1.75 0 012.412 0l3.67 3.487.164-.912a35.642 35.642 0 00-.143-13.328 1.194 1.194 0 00-.973-.94zm-8.096-1.48a25.278 25.278 0 018.344 0 2.694 2.694 0 012.196 2.123c.922 4.58.972 9.291.148 13.889l-.221 1.235a1.323 1.323 0 01-2.214.726l-3.909-3.713a.25.25 0 00-.344 0l-3.908 3.713a1.323 1.323 0 01-2.214-.726L5.48 18.95A37.14 37.14 0 015.63 5.062 2.694 2.694 0 017.825 2.94z"
            fill="#000"
          />
        </Svg>
        <Text>Home </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    // height:height,
    // width:width,
  },
});
