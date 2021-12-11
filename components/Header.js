import React from "react";
import { View, Text, StyleSheet  } from "react-native";
import Colors from "../constants/colors";

const Header = () => {
    return (
        <View style={styles.screen}>
            <Text style={styles.text}>Home Automation</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        width: "100%",
        height: 60,
        justifyContent: "center",
        backgroundColor: Colors.primaryColor
    },
    text: {
        fontSize: 22,
        color: Colors.secondaryColor,
        marginLeft: 20,
        fontWeight: "bold"
    }
});

export default Header;