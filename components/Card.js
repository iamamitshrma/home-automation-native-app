import React, { useEffect, useState } from "react";;
import { View, StyleSheet, Text, Image } from "react-native";
import { RadioButton } from "react-native-paper";
import Colors from "../constants/colors";
import database from '../firebase';

const Card = props => {
    const [checked, setChecked] = useState("on");

    useEffect(() => {
        if(props.mainPowerStatus === 'on') {
            setChecked('on');
        }
        if(props.mainPowerStatus === 'off') {
            setChecked('off');
        }

        if(props.mainPowerStatus === "off") {
            database.ref("power").update({value: "off"});
            database.ref("room_stats/room1").update({bulb: "off"});
            database.ref("room_stats/room1").update({fan: "off"});
            database.ref("room_stats/room1").update({ac: "off"});
            database.ref("room_stats/room1").update({fridge: "off"});
            database.ref("room_stats/room1").update({buzzer: "off"});
        } else {
            database.ref("power").update({value: "on"});
            database.ref("room_stats/room1").update({bulb: "on"});
            database.ref("room_stats/room1").update({fan: "on"});
            database.ref("room_stats/room1").update({ac: "on"});
            database.ref("room_stats/room1").update({fridge: "on"});
        }
    }, [props.mainPowerStatus]);

    useEffect(() => {
        if(checked === "on" && props.title === "Light") {
            database.ref("room_stats/room1").update({bulb: "on"});
        } else if(checked === "off" && props.title === "Light"){
            database.ref("room_stats/room1").update({bulb: "off"});
        } else if(checked === "on" && props.title === "Fan") {
            database.ref("room_stats/room1").update({fan: "on"});
        } else if(checked === "off" && props.title === "Fan") {
            database.ref("room_stats/room1").update({fan: "off"});
        } else if(checked === "on" && props.title === "AC") {
            database.ref("room_stats/room1").update({ac: "on"});
        } else if(checked === "off" && props.title === "AC") {
            database.ref("room_stats/room1").update({ac: "off"});
        } else if(checked === "on" && props.title === "Refrigerator") {
            database.ref("room_stats/room1").update({fridge: "on"});
        } else if(checked === "off" && props.title === "Refrigerator") {
            database.ref("room_stats/room1").update({fridge: "off"});
        }
    }, [checked]);    

    return (
        <View style={styles.screen}>
            <View style={styles.imageContainer}>
                <Image style={styles.img} source={checked === 'on' ? props.imgUrl2 : props.imgUrl}/>
            </View>
            <Text style={styles.text}>{props.title}</Text>
            <View style={styles.buttonsContainer}>
                <View style={styles.buttonContainer}>
                    <RadioButton
                        value="first"
                        color={Colors.secondaryColor}
                        status={checked === "on" ? "checked" : "unchecked"}
                        onPress={() => setChecked("on")}
                    />
                    <Text style={styles.buttonText}>On</Text>
                </View>

                <View style={styles.buttonContainer}>
                    <RadioButton
                        value="second"
                        color="red"
                        status={checked === "off" ? "checked" : "unchecked"}
                        onPress={() => setChecked("off")}
                    />
                    <Text>Off</Text>
                </View>
          </View>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        width: "45%",
        height: 200,
        padding: 20,
        backgroundColor: Colors.tertiaryColor,
        borderRadius: 7,
        shadowOffset: {width: 0, height: 2},
        shadowColor: Colors.primaryColor,
        shadowOpacity: 0.8,
        shadowRadius: 10,
        elevation: 2
    },
    imageContainer: {
        alignItems: "center",
        marginBottom: 10,
        width: 70,
        height: 70,
        alignSelf: "center",
    },
    img: {
        width: "100%",
        height: "100%",
        resizeMode: "contain"
    },
    text: {
        textAlign: "center",
        fontSize: 18,
        marginBottom: 30
    },
    buttonsContainer: {
        flexDirection: "row",
        width: "60%",
      },
      buttonContainer: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
      },
      buttonText: {
        width: 20,
      },
});

export default Card;