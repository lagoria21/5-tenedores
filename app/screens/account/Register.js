import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import RegisterForm from "../../components/account/RegisterForm";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export default function Register() {
  return (
    <KeyboardAwareScrollView>
      <Image source={require("../../../assets/img/5-tenedores-letras-icono-logo.png")} resizeMode="contain"
      style={styles.logo}/>
      <View style={styles.viewForm}>
        <RegisterForm />
      </View>
      </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: "100%",
    height: 150,
    marginTop: 20,
  },
  viewForm: {
    marginRight: 40,
    marginLeft: 40,
  },
});
