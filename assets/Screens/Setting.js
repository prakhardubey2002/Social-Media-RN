import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
// import {height,width} from '../assets/dimensions/Dimensions';
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
      <Text>Home Screaxasncluni;dnipnkojicsokcijscbien</Text>
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
