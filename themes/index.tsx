import { opacity } from "react-native-reanimated/lib/typescript/Colors";

export const themeColors = {
  text: "#f97316",
  bgColor: (opacity: number) => `rgba(251, 146, 60, ${opacity})`,
};
