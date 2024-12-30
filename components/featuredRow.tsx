import {
  View,
  Text,
  Touchable,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { themeColors } from "../themes";
import RestaurantCard from "./restaurantCard";
import { Restaurant } from "../constants";

interface FeaturedRowProps {
  title: string;
  description: string;
  restaurants: Restaurant[];
}

export default function FeaturedRow(props: FeaturedRowProps) {
  return (
    <View>
      <View className="px-4 flex-row justify-between items-center">
        <View>
          <Text className="font-bold text-lg">{props.title}</Text>
          <Text className="text-gray-500 text-xs">{props.description}</Text>
        </View>
        <TouchableOpacity onPress={() => {}}>
          <Text
            className="text-gray-600 text-xs"
            style={{ color: themeColors.text }}
          >
            View all
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 15 }}
        className="py-5 overflow-visible"
      >
        {props.restaurants.map((restaurant, index) => {
          return <RestaurantCard key={index} item={restaurant} />;
        })}
      </ScrollView>
    </View>
  );
}
