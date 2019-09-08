import { StyleSheet, Dimensions, PixelRatio  } from "react-native";

// CART PAGE STYLES

let { width, height } = Dimensions.get('window');
width = PixelRatio.getPixelSizeForLayoutSize(width);
//height = PixelRatio.getPixelSizeForLayoutSize(height);

// console.log(PixelRatio.getPixelSizeForLayoutSize(width));

const styles = StyleSheet.create({
  
    container: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        
    },
    
    
    items: {
        justifyContent: "center",
        alignItems: "center"
    },
    icon: {
        
    },
    itemsBlock:{
        
        flexDirection: "column",
        
        
        
        
  
        
    }
});

export default styles;