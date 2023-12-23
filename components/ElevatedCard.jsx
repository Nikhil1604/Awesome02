import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'

const ElevatedCard = () => {
  return (
    <View>
      <Text style={styles.headingText}>ElevatedCard</Text>
      <ScrollView horizontal={true} style={styles.container}>
        <View style={[styles.elevated,styles.card]}>
            <Text>Hello</Text>
        </View>
        <View style={[styles.elevated,styles.card]}>
            <Text>This</Text>
        </View>
        <View style={[styles.elevated,styles.card]}>
            <Text>Is My</Text>
        </View>
        <View style={[styles.elevated,styles.card]}>
            <Text>First</Text>
        </View>
        <View style={[styles.elevated,styles.card]}>
            <Text>Scroll</Text>
        </View>
        <View style={[styles.elevated,styles.card]}>
            <Text>more..</Text>
        </View>  
      </ScrollView>  
    </View>
  )
}
const styles=StyleSheet.create({
    headingText:{
        fontSize:24,
        fontWeight:'bold',
        paddingHorizontal:8
    },
    container:{
        padding:8
    },
    elevated:{ 
        width:100,
        height:100,
        margin:8,
        backgroundColor:'lightgrey',
        justifyContent:'center',
        alignItems:'center'
    },
    card:{}
})

export default ElevatedCard