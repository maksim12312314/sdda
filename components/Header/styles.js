import { Dimensions, StyleSheet } from "react-native";
import Constants from "expo-constants";

const styles = StyleSheet.create({
    container: {
        height: 42,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: Constants.statusBarHeight + 8,
        marginBottom: 8,
        minWidth: Dimensions.get("window").width,
        borderWidth: 1,
        borderColor: "#f00",
    },
    backContainer: {
        width: 40.5,
        height: 49.5,
        borderWidth: 1,
        borderColor: "#ff0",
    },
    iconBack: {
        width: 40.5,
        height: 49.5,
    },
    titleContainer: {
        borderWidth: 1,
        borderColor: "#0f0",
    },
    title: {
        fontSize: 25,
        color: "#fff",
        textAlign: "center",
    },
    cartContainer: {
        width: 49.5,
        height: 40.5,
        borderWidth: 1,
        borderColor: "#0ff",
    },
    iconCart: {
        width: 49.5,
        height: 40.5,
    },
});
export default styles;