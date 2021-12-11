import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import Colors from "../constants/colors";
import database from '../firebase';

const Buzzer = props => {
    
    const buzzerHandler = () => {
        database.ref('room_stats/room1').update({buzzer: "on"});
        setTimeout(() => {
            database.ref('room_stats/room1').update({buzzer: "off"});
        }, 2000);
    }

    return (
        <TouchableOpacity onPress={buzzerHandler}>
            <View style={styles.textContainer}>
                <Text style={styles.text}>Buzzer</Text>
            </View>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    textContainer: {
        width: 80,
        marginRight: 2,
    },
    text: {
        fontSize: 22,
        color: Colors.whiteColor
    }
});

export default Buzzer;