import React, { useContext } from "react";
import { stateContext, dispatchContext } from "../../../contexts";

import { ScrollView, View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import CartIcon from "./CartIcon";
import CartItem from "./CartItem";
import CartTotal from "./CartTotal";
import styles from "./styles";
import Header from "../../Header/index";

// Корзина

const ItemsBlock = (props)=>{

    const state = useContext(stateContext);
    
    
    return (
        <View style={styles.itemsBlock}> 
            { !state.cartItems.length
                ? <Text>Товаров нет</Text>
                : state.cartItems.map( (v, i) =>
                {
                    return <CartItem key={i} data={v}/>
                }) }
            
        </View>
    )
}

const Cart = (props) =>
{
    const state = useContext(stateContext);
    const dispatch = useContext(dispatchContext);
    
    return (
        <View style={styles.container}>
            <LinearGradient
               style={{
                position: 'absolute',
                left: 0,
                right: 0,
                top: 0,
                bottom: 0
              }}
                locations={[0, 1.0]} 
                colors={["#E81C1C", "#E4724F"]}/>
                <Header {...props}/>
                <CartIcon style={styles.icon}/>

                
                <ItemsBlock/>
          
                   
                
                <CartTotal/>
            
		</View>
    );
}

export default Cart; 