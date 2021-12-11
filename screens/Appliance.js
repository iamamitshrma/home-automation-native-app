import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, ScrollView, Image } from "react-native";
import { RadioButton } from "react-native-paper";
import Card from "../components/Card";
import Colors from "../constants/colors";
import database from '../firebase';


const Appliance = (props) => {
  const [checkedMain, setCheckedMain] = useState("on");
  const [checkedTv, setCheckedTv] = useState("on");



  useEffect(() => {
    if(checkedMain === "off") {
      setCheckedTv('off');
    }
    if(checkedMain === 'on') {
      setCheckedTv('on');
    }
  }, [checkedMain, setCheckedMain])


  if(checkedMain === "on") {
    database.ref("power").update({value: "on"});
  } else {
    database.ref("power").update({value: "off"});
  }


  if(checkedTv === 'on') {
    database.ref("room_stats/room1").update({tv: "on"});
  } else {
    database.ref("room_stats/room1").update({tv: "off"});
  }
  
  return (
    <ScrollView style={styles.screenScroll}>
      <View style={styles.screen}>
        <View style={styles.headingContainer}>
          <Text style={styles.heading}>Main Power</Text>
          <View style={styles.buttonsContainer}>
            <View style={styles.buttonContainer}>
              <RadioButton
                value="first"
                color={Colors.secondaryColor}
                status={checkedMain === "on" ? "checked" : "unchecked"}
                onPress={() => setCheckedMain("on")}
              />
              <Text style={styles.buttonText}>On</Text>
            </View>

            <View style={styles.buttonContainer}>
              <RadioButton
                value="second"
                color="red"
                status={checkedMain === "off" ? "checked" : "unchecked"}
                onPress={() => setCheckedMain("off")}
              />
              <Text>Off</Text>
            </View>
          </View>
        </View>

        <View style={{ ...styles.cardContainer1, ...styles.flexRow }}>
          <Card mainPowerStatus={checkedMain} imgUrl={require('../assets/images/light.png')} imgUrl2={require('../assets/images/light-on.gif')} title="Light"/>
          <Card mainPowerStatus={checkedMain} imgUrl={require('../assets/images/fan.png')} imgUrl2={require('../assets/images/fan-on.gif')} title="Fan"/>
        </View>
        <View style={styles.flexRow}>
          <Card mainPowerStatus={checkedMain} imgUrl={require('../assets/images/ac.png')} imgUrl2={require('../assets/images/ac-on.gif')} title="AC"/>
          <Card mainPowerStatus={checkedMain} imgUrl={require('../assets/images/fridge.png')} imgUrl2={require('../assets/images/fridge-on.gif')} title="Refrigerator"/>
        </View>

        <View style={styles.tvContainer}>
          <View style={styles.imageContainer}>
            <Image style={styles.tvImg} source={checkedTv === 'on' ? require("../assets/images/tv-on.gif") : require("../assets/images/tv.png")} />
          </View>

          <View style={styles.tvRight}>
            <Text style={styles.tvText}>T.V</Text>
            <View style={styles.buttonsContainer}>
              <View style={styles.buttonContainer}>
                <RadioButton
                  value="first"
                  color={Colors.secondaryColor}
                  status={checkedTv === "on" ? "checked" : "unchecked"}
                  onPress={() => setCheckedTv("on")}
                />
                <Text style={styles.buttonText}>On</Text>
              </View>

              <View style={styles.buttonContainer}>
                <RadioButton
                  value="second"
                  color="red"
                  status={checkedTv === "off" ? "checked" : "unchecked"}
                  onPress={() => setCheckedTv("off")}
                />
                <Text>Off</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  screenScroll: {
    width: "100%",
    height: "100%",
    backgroundColor: '#ccc'
  },
  headingContainer: {
    marginVertical: 30,
    width: "90%",
    padding: 15,
    borderRadius: 7,
    shadowRadius: 1,
    shadowOpacity: 0.8,
    shadowColor: "black",
    elevation: 2,
    backgroundColor: Colors.tertiaryColor,
    flexDirection: "column",
    alignItems: "center",
  },
  heading: {
    textAlign: "center",
    width: "50%",
    fontSize: 22,
  },
  buttonsContainer: {
    flexDirection: "row",
    width: "60%",
  },
  buttonContainer: {
    width: "60%",
    flexDirection: "row",
    alignItems: "center",
  },
  buttonText: {
    width: 20,
  },
  flexRow: {
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
  },
  cardContainer1: {
    marginBottom: 20,
  },
  tvContainer: {
    width: "90%",
    height: 200,
    marginTop: 30,
    marginBottom: 50,
    padding: 10,
    borderRadius: 7,
    shadowOffset: { width: 0, height: 2 },
    shadowColor: "black",
    shadowOpacity: 0.8,
    shadowRadius: 10,
    elevation: 2,
    backgroundColor: Colors.tertiaryColor,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  imageContainer: {
    width: 120,
    height: 120,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    marginLeft: 40
  },
  tvImg: {
    width: "100%",
    height: "100%",
    justifyContent: "center"
  },
  tvRight: {
    alignItems: "center",
    paddingVertical: 40,
    width: "50%"
  },
  tvText: {
    fontSize: 22,
    marginBottom: 10
  }
});

export default Appliance;
