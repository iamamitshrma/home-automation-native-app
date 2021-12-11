import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Appliance from "../screens/Appliance";
import More from "../screens/More";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../constants/colors";
import Buzzer from "../components/Buzzer";


const Tab = createBottomTabNavigator();

const AutomationTabNavigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: Colors.primaryColor,
          },
          headerTintColor: Colors.secondaryColor,
          tabBarActiveTintColor: Colors.secondaryColor,
          tabBarStyle: {
            backgroundColor: Colors.primaryColor,
          },
          headerTitle: "Home Automation",
          headerRight: () => <Buzzer />
        }}
      >
        <Tab.Screen
          name="Home"
          component={Appliance}
          options={{
            tabBarIcon: (tabInfo) => {
              return <Ionicons name="home" size={25} color={tabInfo.color} />;
            },
          }}
        />
        <Tab.Screen
          name="More"
          component={More}
          options={{
            tabBarIcon: (tabInfo) => {
              return <Ionicons name="reader" size={25} color={tabInfo.color} />;
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AutomationTabNavigation;
