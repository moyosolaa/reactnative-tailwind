import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text, TextInput, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Icon from "react-native-feather";
import { themeColors } from "../themes";
import Categories from "../components/categories";
import FeaturedRow from "../components/featuredRow";
import { featured } from "../constants";

export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1 white">
      <StatusBar />

      {/* searchbar */}
      <View className="flex-row items-center space-x-2 px-4 pb-2">
        <View className="flex-1 flex-row items-center p-3 mr-2 rounded-full border border-gray-300">
          <Icon.Search height="20" width="20" stroke="gray" />
          <TextInput
            placeholder="Restaurants"
            className="ml-3 flex-1"
          ></TextInput>
          <View className="flex-row items-center space-x-1 border-0 border-l-2 pl-2 border-l-gray-300 ">
            <Icon.MapPin height="20" width="20" stroke="gray"></Icon.MapPin>
            <Text className="text-gray-600 text-xs pl-1">Lagos, Nigeria</Text>
          </View>
        </View>
        <View
          style={{ backgroundColor: themeColors.bgColor(1) }}
          className="p-3 rounded-full bg-gray-300"
        >
          <Icon.Sliders
            height="20"
            width="20"
            strokeWidth={2.5}
            stroke="white"
          ></Icon.Sliders>
        </View>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={true}
        contentContainerStyle={{ paddingBottom: 20 }}
      >
        {/* categories */}
        <Categories />
        {/* featured restaurants */}
        <View className="m-4">
          {[featured].map((item, index) => {
            return (
              <FeaturedRow
                key={index}
                title={item.title}
                restaurants={item.restaurants}
                description={item.description}
              />
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
