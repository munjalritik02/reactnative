import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text,Button, TouchableWithoutFeedback, Image, View, SafeAreaView, Platform, Alert } from 'react-native';
import { TouchableNativeFeedback } from 'react-native-web';
import {useDimensions} from '@react-native-community/hooks';

export default function App() {
  console.log(useDimensions)
   return (
  

    <SafeAreaView style={styles.container}>
         <view style={{
          backgroundcolor: "dodgerblue",
          flex:1,
          flexDirection: "row",
        }} ></view>
      <Text > Hello React native!</Text>
      <TouchableWithoutFeedback onPress={() => console.log("Image tapped")}>
      <Image 
            source={{
            width: 200,
            height: 300,
            uri: "https://image.shutterstock.com/image-photo/weather-forecast-concept-climate-change-260nw-1390294940.jpg",
          }}
          />
      </TouchableWithoutFeedback>
       
       
      <StatusBar style="auto" /> 
      <Button 
      color="orange"
      title="click me"
       onPress={() => Alert.alert("My title", "My message", [
  
         {text: "yes", onPress: () => console.log("Yes")},
         {text: "No",  onPress: () => console.log("No")},

       ])} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.os === "android"  ? 20: 0,
    
  },
});
