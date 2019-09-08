import React from "react";
import { View, StyleSheet, TextInput, Text, Dimensions, Button, TouchableOpacity } from "react-native";
import {LinearGradient} from "expo-linear-gradient";


const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
    },
    textDelivery: {
        color: '#fff',
        fontWeight: "normal",
        paddingBottom: 10,    
    },
    text: {
        color: '#fff',
        fontWeight: "normal",
        marginRight: 10,   
    },
    line: {
        borderBottomWidth: 1,
        borderBottomColor: '#fff',
        width: 90,
        marginLeft: 13,
        opacity: 0.7,
    },
    text_input: {
        height: 20,
        borderBottomWidth: 1,
        borderColor: "#fff",
        color: "#fff",
        maxWidth: 310,
        flexGrow: 1,
        
    },
    grad: {
        //height: Dimensions.get("window").height,
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
    },
    main: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 220,

    },
    data: {
        justifyContent: "flex-start",
        alignItems: "flex-start",
        width: 233,
    },
    header: {
        marginBottom: 20,
    },
    button: {
       
        paddingHorizontal: 8,
        paddingVertical: 4,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        backgroundColor: '#ffffff',
        position: "absolute",
        left: 1,
        right: 1,
        bottom: 1
    },
    text_button: {
        color: "#3BF3AE",
        
    },
});



const DeliveryDetails = (props) =>
{
    return (
        <>
        <LinearGradient style={styles.grad} locations={[0, 1.0]} colors={["#1DC44F", "#3BF3AE"]}/>
        <View style={styles.main}>
            <View style={styles.header}>
                <Text style={styles.textDelivery}>Детали доставки</Text>
                <View style={styles.line}></View>
		    </View>
            <View style={styles.data}>
                <View style={styles.container}>
                    <Text style={styles.text}>Имя</Text>
                    <TextInput style={styles.text_input}></TextInput>
                </View>
                <View style={styles.container}>
                    <Text style={styles.text}>Телефон</Text>
                    <TextInput style={styles.text_input}></TextInput>
                </View>
                <View style={styles.container}>
                    <Text style={styles.text}>Адрес</Text>
                    <TextInput style={styles.text_input}></TextInput>
                </View>
                <View style={styles.container}>
                    <Text style={styles.text}>Этаж</Text>
                    <TextInput style={styles.text_input}></TextInput>
                </View>
                <View style={styles.container}>
                    <Text style={styles.text}>Примечания</Text>
                    <TextInput style={styles.text_input}></TextInput>
                </View>
                <View style={styles.container}>
                    <Text style={styles.text}>Когда привезти</Text>
                    <TextInput style={styles.text_input}></TextInput>
                </View>
               
            </View>
            
            
            
        </View>

         
        <TouchableOpacity style={styles.button}>
                 <Text style={styles.text_button}>Hi padla</Text>
        </TouchableOpacity>
        </>
    );
}

export default DeliveryDetails;