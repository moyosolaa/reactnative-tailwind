import { useRoute } from "@react-navigation/native";
import React from "react";
import { View, Text, Image, ScrollView } from "react-native";

export default function RestaurantScreen() {
  const route = useRoute();
  let item = route.params;
  console.log(item);
  return (
    <View>
      <ScrollView>
        <View className="relative">
          {/* <Image className="w-full h-72" source={item.image} /> */}
          <Text>Restaurant Screen</Text>
        </View>
      </ScrollView>
    </View>
  );
}
