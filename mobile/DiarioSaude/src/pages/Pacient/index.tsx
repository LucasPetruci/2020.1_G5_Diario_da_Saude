import React, { useContext } from "react";
import { Text, View, Button } from "react-native";
import styles from "../SignupMedic/styles";
import { RectButton } from "react-native-gesture-handler";
import AuthContext from "../../contexts/auth";
import AsyncStorage from "@react-native-community/async-storage";

function Pacient() {
  const storagedUser = AsyncStorage.getItem("@DiarioSaude:user");

  return (
    <View style={styles.container}>
      <Text>Paciente</Text>
      <RectButton>
        <Text>Sair</Text>
      </RectButton>
    </View>
  );
}

export default Pacient;