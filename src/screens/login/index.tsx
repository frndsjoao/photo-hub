import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function LoginScreen() {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <Text>LoginScreen</Text>
      <TouchableOpacity onPress={() => navigation.navigate("home")}>
        <Text>Ir para HOME</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
