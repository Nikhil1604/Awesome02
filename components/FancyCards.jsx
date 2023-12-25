import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Image } from 'react-native'

export default function FancyCards() {
  return (
    <View>
        <Text style={styles.headingText}>FancyCards</Text>
        <View style={[styles.card,styles.cardElevated]}>
            <Image source={{
                uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv0a00QDH2GPgsiHK4g_o5BWUtvbx9Itwy3rEGaNZIBuDuJ7c&s'
            }} style={styles.picture}/>
            <View style={styles.cardBody}>
                <Text style={styles.cardTitle}>Hawa Mahal</Text>
                <Text style={styles.cardLabel}>Pink City, Jaipur</Text>
                <Text style={styles.cardDesciption}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum atque a, quos tempora sed unde autem, consequuntur, vero ut sequi nam repellendus laudantium corporis ea eligendi dolorum dolores ipsa iste?</Text>
                <Text style={styles.cardFooter}>12 Minutes Away</Text>
            </View>
        </View>  
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{
        fontSize:24,
        fontWeight:'bold',
        paddingHorizontal:8
    },
    card:{
        width:350,
        height:420,
        borderRadius:6,
        marginHorizontal:16,
        marginVertical:12
    },
    cardElevated:{
        backgroundColor:'#000000',
        elevation:4,
        shadowOffset:{
            height:1,
            width:1
        }
    },
    picture:{
        height:200,
        borderTopLeftRadius:5,
        borderTopRightRadius:5,
        marginBottom:8
    },
    cardBody:{
        flex:1,
        paddingHorizontal:12
    },
    cardTitle:{
        color:'#ffffff',
        fontSize:24,
        fontWeight:'bold',
        marginBottom:6
    },
    cardLabel:{
        color:'#ffffff',
        fontSize:20,
        marginBottom:4
    },
    cardDesciption:{
        color:'#ffffff',
        fontSize:16,
        marginBottom:12
    },
    cardFooter:{
        color:'#ffffff',
        fontSize:14
    }
})