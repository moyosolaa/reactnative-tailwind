import React from "react";
import { Touchable, TouchableOpacity, View, Text } from "react-native";
import { themeColors } from "../themes";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackScreens } from "../navigation";

export default function CartIcon() {
  const navigation = useNavigation<NativeStackNavigationProp<StackScreens>>();

  return (
    <View className="absolute bottom-5 w-full z-50">
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Cart");
        }}
        style={{ backgroundColor: themeColors.bgColor(1) }}
        className="flex-row justify-between items-center p-4 py-3 rounded-full mx-5 shadow-lg"
      >
        <View
          style={{ backgroundColor: "rgba(255,255,255,0.3)" }}
          className="p-2 px-4 rounded-full"
        >
          <Text className="font-extrabold text-white text-lg">3</Text>
        </View>
        <Text className="flex-1 text-center font-extrabold text-white text-lg">
          View Cart
        </Text>
        <Text className="font-extrabold text-white text-lg">${230}</Text>
      </TouchableOpacity>
    </View>
  );
}
