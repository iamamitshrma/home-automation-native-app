import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import LoginScreen from "../screens/LoginScreen";
import AutomationTabNavigation from "./AutomationTabNavigation";

const Navigation = () => {

    const [isLogin, setIsLogin] = useState(true);

    const loginHandler = () => {
        setIsLogin(false);
    }

    return (
        <View style={styles.screen}>
            {isLogin ? <LoginScreen loginHandler={loginHandler}/> : <AutomationTabNavigation />}
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1
    }
})

export default Navigation;