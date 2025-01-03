import React from "react";
import { TouchableOpacity, View, Text, Image, ScrollView } from "react-native";
import { featured } from "../constants";
import { StackScreens } from "../navigation";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { themeColors } from "../themes";
import * as Icon from "react-native-feather";

export default function CartScreen() {
  const restaurant = featured.restaurants[0];
  const navigation = useNavigation<NativeStackNavigationProp<StackScreens>>();
  return (
    <View className=" bg-white flex-1">
      {/* back button
       */}
      <View className="relative py-4 shadow-sm">
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{ backgroundColor: themeColors.bgColor(1) }}
          className="absolute z-10 rounded-full p-1 shadow top-5 left-2"
        >
          <Icon.ArrowLeft strokeWidth={3} stroke="white" />
        </TouchableOpacity>
        <View>
          <Text className="text-center font-bold text-xl">Your cart</Text>
          <Text className="text-center text-gray-500">{restaurant.name}</Text>
        </View>
      </View>
      {/* delivery time */}
      <View
        style={{ backgroundColor: themeColors.bgColor(0.2) }}
        className="flex-row px-4 items-center"
      >
        <Image
          source={require("../assets/images/bikeGuy.png")}
          className="w-14 h-14 p-1 rounded-full"
        />
        <Text className="flex-1 pl-4"> Deliver in 20-30 minutes</Text>
        <TouchableOpacity>
          <Text className="font-bold" style={{ color: themeColors.text }}>
            Change
          </Text>
        </TouchableOpacity>
      </View>

      {/* dishes */}

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 50 }}
        className="pt-5 bg-white"
      >
        {restaurant.dishes.map((dish, index) => {
          return (
            <View
              key={index}
              className="flex-row items-center space-x-3 px-4 py-2 bg-white rounded-3xl mx-2 mb-3 shadow-md"
            >
              <Text className="font-bold" style={{ color: themeColors.text }}>
                2 x
              </Text>
              <Image
                className="w-14 mx-2 h-14 rounded-full"
                source={dish.image}
              ></Image>
              <Text className="flex-1 mx-2 font-bold text-gray-700">
                {dish.name}
              </Text>
              <Text className="text-base font-semibold">${dish.price}</Text>
              <TouchableOpacity
                className="p-1 rounded-full mx-3"
                style={{ backgroundColor: themeColors.bgColor(1) }}
              >
                <Icon.Minus
                  strokeWidth={2}
                  height={20}
                  width={20}
                  stroke={"white"}
                />
              </TouchableOpacity>
            </View>
          );
        })}
      </ScrollView>
      <View
        className="p-6 px-8 rounded-t-3xl space-y-4"
        style={{ backgroundColor: themeColors.bgColor(0.2) }}
      >
        <View className="flex-row justify-between my-2">
          <Text className="text-gray-700 ">Subtotal</Text>
          <Text className="text-gray-700 ">$20</Text>
        </View>
        <View className="flex-row justify-between my-2">
          <Text className="text-gray-700 ">Delivery Fee</Text>
          <Text className="text-gray-700 ">$12</Text>
        </View>
        <View className="flex-row justify-between my-2">
          <Text className="text-gray-700 font-extrabold">Order Total</Text>
          <Text className="text-gray-700 font-extrabold">$32</Text>
        </View>
        <View className="my-3">
          <TouchableOpacity
            onPress={() => navigation.navigate("OrderPreparing")}
            className="p-3 rounded-full mx-3"
            style={{ backgroundColor: themeColors.bgColor(1) }}
          >
            <Text className="text-white text-center text-lg font-bold">
              Place Order
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
