import { Image, TouchableWithoutFeedback, View, Text } from "react-native";
import { Restaurant } from "../constants";
import * as Icon from "react-native-feather";
import { themeColors } from "../themes";
import { useNavigation, NavigationProp, ParamListBase } from "@react-navigation/native";

type RestaurantCardProps = {
  item: Restaurant;
};

export default function RestaurantCard({ item }: RestaurantCardProps) {
  const navigation = useNavigation<NavigationProp<ParamListBase>>();
  return (
    <TouchableWithoutFeedback
      onPress={() => navigation.navigate("Restaurant", { ...item })}
    >
      <View
        style={{
          shadowColor: themeColors.bgColor(0.4),
          shadowRadius: 7,
        }}
        className="bg-white mr-6 shadow-lg rounded-3xl"
      >
        <Image className="h-36 w-64 rounded-t-3xl" source={item.image} />
        <View className="px-3 pb-4 space-y-2">
          <Text className="text-lg font-bold pt-2">{item.name}</Text>
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
          <View className="flex-row items-center space-x-1 mt-2">
            <Icon.MapPin height="15" width="15" stroke="gray"></Icon.MapPin>
            <Text className="text-sm text-gray-700">
              Nearby · {item.address}
            </Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
