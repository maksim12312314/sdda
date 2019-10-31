import React from "react";
import { View, StyleSheet, TextInput, Text, Dimensions, Button, TouchableOpacity } from "react-native";
import {LinearGradient} from "expo-linear-gradient";
import Header from "./../Header/index";


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
        marginLeft: 25,
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
       
        paddingHorizontal: 4,
        paddingVertical: 4,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        backgroundColor: '#ffffff',
        position: "absolute",
        left: 25,
        right:25,
        bottom: 40
    },
    text_button: {
        color: "#961EC4",
        
    }, 
    time: {
        bottom: 18,
    },  
});


/** Компонент списка заказов */
const Orders = (props) =>
{
    return (
        <>
        <LinearGradient style={styles.grad} locations={[0, 1.0]} colors={["#931DC4", "#F33BC8"]}/>
        <Header {...props} showBack={true} showTitle={true}/>
        <View style={styles.main}>
            <View>
                <Text styles={styles.UpHeader}>Заказы</Text>
            </View>
            <View style={styles.header}>
                <Text style={styles.textDelivery}>Выполненые заказы</Text>
                <View style={styles.line}></View>
		    </View>
            <View style={styles.time}>
                <Text style={styles.text}>26 августа 2019, 4 часа утра</Text>
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
                 <Text style={styles.text_button}>Редактировать и разместить</Text>
        </TouchableOpacity>
        </>
    );
}

export default Orders;