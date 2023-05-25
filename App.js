import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

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
    <View style={styles.container}>
      <Text>Jai Shree Ram</Text>
      <StatusBar style="auto" />
    </View>
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
