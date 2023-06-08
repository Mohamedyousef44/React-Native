// import { StatusBar } from "expo-status-bar";
// import { useCallback, useState } from "react";
// import { FlatList, SafeAreaView, Text } from "react-native";
// import styles from "./styles";
// import Box from "./components/Box";

import styles from "./styles";
import { NavigationContainer } from "@react-navigation/native";
import Root from "./navigations/root";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

export default function App() {

  const Tab = createMaterialTopTabNavigator();

  return (
    <NavigationContainer>
      <Root></Root>
    </NavigationContainer>
  );

}
//   const COLORS = [
//     { colorName: "Base03", hexCode: "#002b36" },
//     { colorName: "Base02", hexCode: "#073642" },
//     { colorName: "Base01", hexCode: "#586e75" },
//     { colorName: "Base00", hexCode: "#657b83" },
//     { colorName: "Base0", hexCode: "#839496" },
//     { colorName: "Base1", hexCode: "#93a1a1" },
//     { colorName: "Base2", hexCode: "#eee8d5" },
//     { colorName: "Base3", hexCode: "#fdf6e3" },
//     { colorName: "Yellow", hexCode: "#b58900" },
//     { colorName: "Orange", hexCode: "#cb4b16" },
//     { colorName: "Red", hexCode: "#dc322f" },
//     { colorName: "Magenta", hexCode: "#d33682" },
//     { colorName: "Cyan", hexCode: "#2aa198" },
//     { colorName: "Green", hexCode: "#859900" },
//     { colorName: "Yellow", hexCode: "#b58900" },
//     { colorName: "Orange", hexCode: "#cb4b16" },
//     { colorName: "Red", hexCode: "#dc322f" },
//     { colorName: "Magenta", hexCode: "#d33682" },
//     { colorName: "Cyan", hexCode: "#2aa198" },
//     { colorName: "Green", hexCode: "#859900" },
//   ];
//   return (
//     <SafeAreaView style={styles.container}>
//       <FlatList
        
//         data={COLORS}
//         renderItem={(props) => (
//           <Box
//             colorName={props.item.colorName}
//             hexCode={props.item.hexCode}
//           ></Box>
//         )}
//         keyExtractor={(props) => props.hexCode}
//         ListHeaderComponent={
//           <Text style={styles.header}>
//             Here are some boxes for different color
//           </Text>
//         }
//         ListEmptyComponent={<Text>No Data</Text>}
//       ></FlatList>
//     </SafeAreaView>
//   );




// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View , ScrollView , Image , SafeAreaView  } from 'react-native';

// export default function App() {
//   return (
//     <SafeAreaView>
//       <View style={styles.nav}><Text style={styles.paragraph}>Photo</Text></View>
//       <ScrollView horizontal>
//         <Image source={require('./assets/image1.jpg')} style={styles.image} />
//         <Image source={require('./assets/image2.jpg')} style={styles.image} />
//         <Image source={require('./assets/image3.jpg')} style={styles.image} />
//         <Image source={require('./assets/image4.jpg')} style={styles.image} />
//       </ScrollView>
//       <View style={styles.footer}>
//         <Text style={styles.paragraph}>Photos</Text>
//         <Text style={styles.paragraph}>Albums</Text>
//       </View>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   nav: {
//     backgroundColor: '#122620',
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     height:50,
//   },
//   paragraph: {
//     textAlign: 'center',
//     color:"white",
//   },
//   footer: {
//     flex: 1,
//     backgroundColor: '#122620',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     flexDirection:'row',
//     height:50
//   },
//   image:{
//     width:400,
//     height: 500,
//   },
// });
