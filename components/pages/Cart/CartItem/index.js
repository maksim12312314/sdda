import React, { useContext } from "react";
import { View, Text, TouchableOpacity, Alert } from "react-native";
import ItemCount from "./ItemCount";
import styles from "./styles";
import { stateContext, dispatchContext } from "../../../../contexts";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';

const DeleteButton = (props) =>
{
    const { id } = props;
    const dispatch = useContext(dispatchContext);

    return (
        <TouchableOpacity onPress={(e) =>
        {
            Alert.alert("УдОлить элементы", "Хотите удОлитЪ?", [
                {
                    text: "Отмена",
                    style: "cancel"
                },
                {
                    text: "OK",
                    onPress: () => {
                        dispatch({type: "DeleteFromCart", payload: id, showAlert: true});
                        dispatch({type: "ComputeTotalPrice"});
                    },
                },
                {cancelable: false},
            ]);
            
        }}>
            <FontAwesomeIcon size={16} color={"#fff"} icon={ faTimesCircle }/>
        </TouchableOpacity>
    )
}

/** Компонент товара в корзине */
const CartItem = (props) =>
{
    const {id, name, price, count} = props.data;
    return (
        <View style={styles.container}>
            <Text style={styles.item_name}>{name}</Text>
            <View style={styles.right}>
                <ItemCount id={id} count={count}/>
                <Text style={styles.item_price}>{price*count}$</Text>
                <DeleteButton id={id}/>
            </View>
        </View>
    );
}

export default CartItem; 