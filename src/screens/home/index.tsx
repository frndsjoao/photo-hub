import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <Text>HomeScreen</Text>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text>Ir para LOGIN</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
