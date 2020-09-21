import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function RegisterForm(){
    return(
        <View>
            <Text>Register form....</Text>
        </View>
    );
}


const styles = StyleSheet.create({
    formContainer: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 30,
    },
    inputForm: {
      width: "100%",
      marginTop: 20,
    },
    btnContainerRegister: {
      marginTop: 20,
      width: "95%",
    },
    btnRegister: {
      backgroundColor: "#00a680",
    },
    iconRight: {
      color: "#c1c1c1",
    },
  });