import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
    view: {
    },
    container: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        height: Dimensions.get("window").height,
    }
});

export default styles;