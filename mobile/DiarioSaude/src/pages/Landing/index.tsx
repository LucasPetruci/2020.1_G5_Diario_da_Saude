import React, { useState, useEffect } from "react";
import { View, Image, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { RectButton } from "react-native-gesture-handler";
import logo from "../../assets/logo.png";
import styles from "./styles";

function Landing() {
  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <View style={styles.buttonsContainer}>
        <RectButton style={styles.buttonEntrar}>
          <Text style={styles.textButton}>Entrar</Text>
        </RectButton>
        <RectButton style={styles.buttonCadastrar}>
          <Text style={styles.textButton}>Cadastrar</Text>
        </RectButton>
      </View>
    </View>
  );
}

export default Landing;
