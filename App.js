import react from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import FlatCards from "./components/FlatCards";
import ElevatedCard from "./components/ElevatedCard";
import FancyCards from "./components/FancyCards";

export default function App() {
  return(
    <SafeAreaView style={styles.container}>
      <ScrollView>
          <FlatCards/>
          <ElevatedCard />
          <FancyCards />
          <FancyCards />
          <ElevatedCard />
      </ScrollView>
    </SafeAreaView>
  )
}

const styles= StyleSheet.create({
  container:{
    flex:1,
    // justifyContent:'center'
  }
})