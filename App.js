import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , ScrollView , Image , SafeAreaView  } from 'react-native';

export default function App() {
  return (
    <SafeAreaView>
      <View style={styles.nav}><Text style={styles.paragraph}>Photo</Text></View>
      <ScrollView horizontal>
        <Image source={require('./assets/image1.jpg')} style={styles.image} />
        <Image source={require('./assets/image2.jpg')} style={styles.image} />
        <Image source={require('./assets/image3.jpg')} style={styles.image} />
        <Image source={require('./assets/image4.jpg')} style={styles.image} />
      </ScrollView>
      <View style={styles.footer}>
        <Text style={styles.paragraph}>Photos</Text>
        <Text style={styles.paragraph}>Albums</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  nav: {
    backgroundColor: '#122620',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height:50,
  },
  paragraph: {
    textAlign: 'center',
    color:"white",
  },
  footer: {
    flex: 1,
    backgroundColor: '#122620',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection:'row',
    height:50
  },
  image:{
    width:400,
    height: 500,
  },
});
