import { StyleSheet, Dimensions, PixelRatio  } from "react-native";

let { width, height } = Dimensions.get('window');
width = PixelRatio.getPixelSizeForLayoutSize(width);
console.log(PixelRatio.getPixelSizeForLayoutSize(120))

const styles = StyleSheet.create({
    container: {
       
       
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
        
        
    },
    item_name: {
        
        color: "#FFF",
        fontSize: 16,
        width: 150,
       
    },
    item_price: {

        color: "#FFF",
        fontSize: 16,
        marginHorizontal: 8,
        
        
    },
    item_count: {
        color: "#FFF",
        fontSize: 16,
        marginHorizontal: 16,
        flexGrow: 0,
    },
    right: {
        width: 120,
        flexDirection: "row",
                
        alignItems: "center",
        
    }
});

export default styles;