import { StyleSheet } from "react-native";
import { COLORS, FONTS } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 64,
    justifyContent: "center",
  },

  navbarItem: {
    alignItems: "center",
    justifyContent: "center",
    width: 82,
  },

  navbarItemText: {
    marginTop: 4,
    alignItems: "center",
    color: COLORS.GRAY,
    fontSize: 12,
    fontFamily: FONTS.REGULAR,
  },
});