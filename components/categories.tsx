import {
  View,
  Text,
  ScrollView,
  Touchable,
  TouchableOpacity,
  Image,
} from "react-native";
import { categories } from "../constants";
import { useState } from "react";

export default function Categories() {
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);

  return (
    <View className="mt-4">
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="flex-row space-x-4 px-4 overflow-visible"
        contentContainerStyle={{ paddingHorizontal: 15 }}
      >
        {categories.map((category, index) => {
          let isSelected = category.id == selectedCategory;
          let btnClass = isSelected ? "bg-gray-600" : "bg-gray-200";
          let textColor = isSelected
            ? "font-semibold text-gray-800 "
            : "text-gray-500 ";
          return (
            <View key={index} className="flex justify-center items-center mr-6">
              <TouchableOpacity
                onPress={() => setSelectedCategory(category.id)}
                className={" bg-gray-200 p-3 rounded-2xl shadow " + btnClass}
              >
                <Image
                  style={{ height: 25, width: 35 }}
                  source={category.image}
                />
              </TouchableOpacity>
              <Text className={"text-sm mt-2 " + textColor}>
                {category.name}
              </Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}
