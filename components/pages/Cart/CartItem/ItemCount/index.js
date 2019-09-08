import React, { useContext } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { stateContext, dispatchContext } from "../../../../../contexts";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPlusCircle, faMinusCircle } from '@fortawesome/free-solid-svg-icons';
import styles from "./styles";

// Товар в корзине

const ItemCount = (props) =>
{
    const state = useContext(stateContext);
    const dispatch = useContext(dispatchContext);
    const {count, id} = props;

    return (
        <View style={styles.container}>
            <Text style={styles.item_count}>{count} шт</Text>
            <View>
            <TouchableOpacity onPress={ (e) =>
                {
                    dispatch({type: "plus", payload: id});
                    dispatch({type: "ComputeTotalPrice"});
                }} style={styles.button}>
                    <FontAwesomeIcon size={16} color={"#fff"} icon={ faPlusCircle }/>
                </TouchableOpacity>
                <TouchableOpacity onPress={ (e) =>
                {
                    dispatch({type: "minus", payload: id});
                    dispatch({type: "ComputeTotalPrice"});
                }} style={styles.button}>
                    <FontAwesomeIcon size={16} color={"#fff"} icon={ faMinusCircle }/>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default ItemCount; 