import React, { useEffect, useState } from "react";
import {View, StyleSheet, Text } from 'react-native';
import Colors from "../constants/colors";

const MoreReadings = props => {

    const [showText, setShowText] = useState(true);
    const [temprature, settemprature] = useState("");
    const [cityName, setCityName] = useState("");
    const [description, setDescription] = useState("");

    useEffect(() => {
        const interval = setInterval(() => {
            setShowText((showText) => !showText)
        }, 1500)

        fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=bijnor&units=metric&appid=a9e16129646e9ddeb7394a856a0fcb9c`
          )
            .then((response) => response.json())
            .then((data) => {
              console.log(data);
              settemprature(data.main.temp);
              setDescription(data.weather[0].description);
              setCityName(data.name);
            })
            .catch((error) => {
              console.log(error);
        });


        return () => clearInterval(interval)
    }, [])

    return (
        <View style={{...styles.boxContainer, ...props.title3===""? {height: 200}: {height: 250}}}>
            <Text style={styles.wheatherText}>{props.heading}</Text>
            <View style={styles.wheatherInfoContainer}>
                <Text style={styles.wheatherHeading}>{props.title1}</Text>
                <View style={styles.readingContainer}>
                    <Text style={styles.wheatherReading} style={[styles.wheatherReading,{display: showText ? "none" : "flex"}]}>{cityName}</Text>
                </View>
            </View>
            <View style={styles.wheatherInfoContainer}>
                <Text style={styles.wheatherHeading}>{props.title2}</Text>
                <View style={styles.readingContainer}>
                    <Text style={styles.wheatherReading} style={[styles.wheatherReading,{display: showText ? "none" : "flex"}]}>{temprature} ℃</Text>
                </View>
            </View>
            {
                props.title3 === "" ? <Text></Text> : (
                    <View style={styles.wheatherInfoContainer}>
                        <Text style={styles.wheatherHeading}>{props.title3}</Text>
                        <View style={styles.readingContainer}>
                            <Text style={styles.wheatherReading} style={[styles.wheatherReading,{display: showText ? "none" : "flex"}]}>{description}</Text>
                        </View>
                    </View>
                )
            }
        </View>
    )
}

const styles = StyleSheet.create({
    boxContainer: {
        width: '90%',
        marginBottom: 40,
        padding: 10,
        borderRadius: 7,
        shadowOffset: { width: 0, height: 2 },
        shadowColor: "black",
        shadowOpacity: 0.8,
        shadowRadius: 10,
        elevation: 2,
        backgroundColor: Colors.tertiaryColor,
    },
    wheatherText: {
        textAlign: 'center',
        fontSize: 18,
        marginBottom: 20
    },
    wheatherInfoContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginVertical: 5,
        paddingVertical: 10,
        backgroundColor: Colors.primaryColor2,
        borderRadius: 7,
    },
    wheatherHeading: {
        fontSize: 20,
        color: Colors.whiteColor,
        width: "50%",
        textAlign: "center"
    },
    readingContainer: {
        width: "50%"
    },
    wheatherReading: {
        fontSize: 16,
        color: Colors.secondaryColor,
        textAlign: "center"
    }
});

export default MoreReadings;