import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { useEffect } from "react";
import { View, Text, Image } from "react-native";
import { StackScreens } from "../navigation";

export default function OrderPreparing() {
  const navigation = useNavigation<NativeStackNavigationProp<StackScreens>>();
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("DeliveryScreen");
    }, 3000);
  }, []);
  return (
    <View className="flex-1 bg-white justify-center items-center">
      <Image
        source={require("../assets/images/delivery-guy.gif")}
        className="h-80 w-80"
      />
      <Text>Order Peparing</Text>
    </View>
  );
}
