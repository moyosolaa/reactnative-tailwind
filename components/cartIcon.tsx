import React from "react";
import { Touchable, TouchableOpacity, View, Text } from "react-native";
import { themeColors } from "../themes";

export default function CartIcon() {
  return (
    <View className="absolute bottom-5 w-full z-50">
      <TouchableOpacity
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
