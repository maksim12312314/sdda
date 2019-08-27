import React from "react";
import { ScrollView, Text, Image, View } from "react-native";
import styles from "./styles";

const CategoryItem = (props) =>
{
    return (
        <View style={styles.container}>
            <Image
                style={styles.picture}
                source={{uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg=='}}
            />
            <Text style={styles.title}>КрАлики</Text>
        </View>
    );
}

export default CategoryItem;