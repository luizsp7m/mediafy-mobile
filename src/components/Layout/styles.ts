import { StyleSheet } from "react-native";
import { COLORS } from "../../theme";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.DARK_PRIMARY,
    paddingTop: getStatusBarHeight() + 16,
    position: "relative",
  },
});