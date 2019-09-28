import React, { useEffect } from "react";
import { Text, Image, TouchableOpacity } from "react-native";
import styles from "./styles";
import config from "../../../../config";
//import { TouchableOpacity } from "react-native-gesture-handler";

const address = config.getCell("StoreAddress");

const CategoryItem = (props) =>
{
    const { name, imageUrl, id } = props;
    
    return (
        <TouchableOpacity style={styles.container}>
            <Image
                style={styles.picture}
                source={{
                    uri: imageUrl ? `${address}wp-content/uploads/` + imageUrl
                                  :  `${address}wp-content/uploads/woocommerce-placeholder.png`
                }}
            />
            <Text style={styles.title}>{name}</Text>
        </TouchableOpacity>
    );
}

export default CategoryItem;