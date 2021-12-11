import React from "react";
import { ScrollView, StyleSheet, View, Text, Linking, Image, TouchableOpacity } from "react-native";
import MoreReadings from "../components/MoreReadings";
import Colors from '../constants/colors';
const More = props => {
    return (
            <ScrollView style={styles.scrollScreen}>
                <View style={styles.screen}>
                    <MoreReadings heading="WEATHER" title1="City:" title2="Temperature:" title3="Description:" />
                    {/* <MoreReadings heading="ROOM TEMPERATURE / HUMIDITY" title1="Temperature:" title2="Humdity:" title3=""/>
                    <MoreReadings heading="AIR" title1="CO" title2="LPG" title3="Smoke"/> */}

                    <View style={styles.moreContainer}>
                        <Text style={styles.aboutHeading}>About:</Text>
                        <Text style={styles.aboutDetails}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non nihil Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora quas odio, quo blanditiis aperiam deserunt perspiciatis? Sit possimus fugit animi? hvdfk vdkj kdsd dvhkd  soluta tempora temporibus optio pariatur voluptatum dolore eos? Nulla, facilis?</Text>
                    </View>

                    <View style={styles.moreContainer}>
                        <Text style={styles.contactHeading}>Contact:</Text>
                        <TouchableOpacity onPress={() => Linking.openURL('tel: 7534916898')} style={styles.contactDataContainer}>
                            <View style={styles.imageContainer}>
                                <Image style={styles.image} source={require('../assets/images/phone.png')}/>
                            </View>
                            <Text style={styles.contactData}>+91-7534916898</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => Linking.openURL('mailto: iamamitshrma@gmail.com')} style={styles.contactDataContainer}>
                            <View style={styles.imageContainer}>
                                <Image style={styles.image} source={require('../assets/images/email.png')}/>
                            </View>
                            <Text style={styles.contactData}>iamamitshrma@gmail.com</Text>
                        </TouchableOpacity>

                        <View style={styles.socialContainer}>
                            <TouchableOpacity style={styles.socialIconContainer}  onPress={() => Linking.openURL('https://www.linkedin.com/in/amit-sharma-b32171143')}>
                                <Image style={styles.image} source={require('../assets/images/linkedin.png')}/>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.socialIconContainer} onPress={() => Linking.openURL('https://discord.com/channels/918805981264236594/918805981708836874')}>
                                <Image style={styles.image} source={require('../assets/images/discord.png')}/>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.socialIconContainer} onPress={() => Linking.openURL('https://twitter.com/amit__shaarma?t=UfQfnthPdPSD3ptQtZYB3g&s=09')}>
                                <Image style={styles.image} source={require('../assets/images/twitter.png')}/>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView>
    );
};

const styles = StyleSheet.create({
    scrollScreen: {
        width: "100%",
        backgroundColor: '#ccc',
    },
    screen: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 40,
        width: '100%',
        height: "100%",
    },
    moreContainer: {
        width: "95%",
        marginBottom: 30,
        backgroundColor: Colors.tertiaryColor,
        padding: 20,
        borderRadius: 8,
        textAlign: "center",
        alignItems: "center",
        shadowOffset: { width: 0, height: 2 },
        shadowColor: "black",
        shadowOpacity: 0.8,
        shadowRadius: 10,
        elevation: 2,
    },
    aboutHeading: {
        fontSize: 22
    },
    contactHeading: {
        fontSize: 22
    },
    contactDataContainer: {
        width: "80%",
        flexDirection: 'row',
        alignItems: "center",
        marginBottom: 20
    },
    imageContainer: {
        width: 70,
        height: 70,
        marginRight: 20,
    },
    image: {
        width: "100%",
        height: "100%",
    },
    contactData: {
        fontSize: 18,
        color: 'green'
    },
    socialContainer: {
        flexDirection: "row"
    },
    socialIconContainer: {
        width: 50,
        height: 50,
        marginVertical: 10,
        marginHorizontal: 10
    }
});
export default More;