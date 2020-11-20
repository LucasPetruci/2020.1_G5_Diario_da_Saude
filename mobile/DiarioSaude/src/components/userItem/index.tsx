import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";
import { RectButton } from "react-native-gesture-handler";

export interface User {
  Name: string;
}

const UserItem: React.FC<User> = ({ Name }) => {
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <View style={styles.profileInfo}>
          <Text style={styles.name}>André Goretti</Text>
        </View>
        <View style={styles.buttonsContainer}>
          <RectButton style={styles.favoriteButton}>
            <Text style={styles.contactButtonText}>Del</Text>
          </RectButton>
        </View>
      </View>
    </View>
  );
};

export default UserItem;
