import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import Spacer from "./Spacer";
import { withNavigation } from "react-navigation";

const NavLink = ({ navigation }) => {
  return (
      <TouchableOpacity onPress={() => navigation.navigate("Signin")}>
        <Spacer />
        <Text style={styles.link}>
          Already have an account? Sign in instead.
        </Text>
        <Spacer />
      </TouchableOpacity>
  )
}

const styles = StyleSheet.create({});

export default withNavigation(NavLink);
