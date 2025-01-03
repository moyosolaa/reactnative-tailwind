import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useEffect } from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import { Restaurant } from "../constants";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackScreens } from "../navigation";
import { themeColors } from "../themes";
import * as Icon from "react-native-feather";
import { StatusBar } from "expo-status-bar";
import DishRow from "../components/dishRow";
import CartIcon from "../components/cartIcon";
import { useDispatch } from "react-redux";
import { setRestaurant } from "../slices/restaurantSlice";

export default function RestaurantScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<StackScreens>>();

  const route = useRoute();
  let item = route.params as Restaurant;

  const dispatch = useDispatch();
  useEffect(() => {
    if (item && item.id) {
      dispatch(setRestaurant({ ...item }));
    }
  }, []);

  return (
    <View>
      <CartIcon />
      <StatusBar style="light" />
      <ScrollView>
        <View className="relative">
          <Image className="w-full h-72" source={item.image} />
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className="absolute top-14 left-4 bg-gray-50 p-2 rounded-full shadow"
          >
            <Icon.ArrowLeft strokeWidth={3} stroke={themeColors.bgColor(1)} />
          </TouchableOpacity>
        </View>

        <View
          style={{ borderTopRightRadius: 40, borderTopLeftRadius: 40 }}
          className="bg-white -mt-12 pt-6"
        >
          <View className="px-5">
            <Text className="text-3xl font-bold">{item.name}</Text>
            <View className="flex-row space-x-2 my-1">
              <View className="flex-row items-center space-x-1">
                <Icon.Star color={"#FFD700"} height="15" width="15" />
                <Text className="text-xs">
                  <Text className="text-sm text-green-700">{item.stars} </Text>
                  <Text className="text-sm text-gray-700">
                    ({item.reviews} reviews) ·
                  </Text>
                  <Text className="font-semibold "> {item.category}</Text>
                </Text>
              </View>
              <View className="flex-row items-center space-x-1 ml-2">
                <Icon.MapPin height="15" width="15" stroke="gray"></Icon.MapPin>
                <Text className="text-sm text-gray-700">
                  Nearby · {item.address}
                </Text>
              </View>
            </View>
            <Text className="text-gray-500 mt-2">{item.description}</Text>
          </View>
        </View>

        <View className="bg-white pb-36">
          <Text className="p-4 text-2xl font-bold">Menu</Text>
          {item.dishes.map((dish, index) => {
            return <DishRow key={index} dish={dish} />;
          })}
        </View>
      </ScrollView>
    </View>
  );
}
