import React, { useState } from "react";;
import { View, Text, StyleSheet, TouchableOpacity, Image, Button, ImageBackground, Dimensions } from "react-native";
import Header from "../components/Header";
import Colors from "../constants/colors";
import database from '../firebase';



const header = <Header/>

const LoginScreen = (props) => {
    const [loading, setLoading] = useState(false);


    const loginHandler = () => {        
        setLoading(true);
        setTimeout(() => {
            props.loginHandler(loading);
        }, 1000);
    }

    return (
        <View style={styles.screen}>
            <ImageBackground source={require('../assets/images/bg.jpeg')} style={{width: "100%", height: "100%"}}>
                {header}
                <View style={styles.screen}>                
                <View style={styles.loginContainer}>
                    {
                        loading ? (
                            <Text style={styles.loading}>Loading...</Text>
                        ) : (
                            <View>
                                <View style={styles.imageContainer}>
                                    <Image style={styles.image} source={require('../assets/images/iott.png')}/>
                                </View>
                                <Text style={styles.heading}>Home Automation</Text>
                                <Text style={styles.para}>It's time to get your appliances under control.</Text>
                                <TouchableOpacity>
                                    <View style={styles.buttonContainer}>
                                        <Button onPress={loginHandler} style={styles.button} title="Explore" color={Colors.secondaryColor}/>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        )
                    }
                </View>
                </View>
            </ImageBackground>
        </View>
    )
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    loginContainer: {
        width: '90%',
        height: Dimensions.get('screen').height > 600 ? 400 : 300,
        backgroundColor: Colors.tertiaryColor,
        borderRadius: 10,
        padding: 15,
        paddingTop: 20,
        justifyContent: "center",
        alignItems: "center",
        shadowOffset: {width: 0, height: 2},
        shadowColor: Colors.secondaryColor,
        shadowOpacity: 0.8,
        shadowRadius: 10,
        elevation: 3
    },
    heading: {
        fontSize: 30,
        textAlign: "center",
        marginBottom: 30,
    },
    para: {
        fontSize: 20,
        textAlign: "center",
        marginBottom: 30
    },
    imageContainer: {
        width: 80,
        height: 80,
        alignItems: "center",
        justifyContent: "center",
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: 30

    },
    image: {
        height: "100%",
        width: "100%"
    },
    buttonContainer: {
        paddingHorizontal: 50,
    },
    button: {
        margin: 0,
    },
    loading : {
        fontSize: 22
    }
})

export default LoginScreen;