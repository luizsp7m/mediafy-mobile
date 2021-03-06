import { StyleSheet } from "react-native";
import { COLORS, FONTS } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    marginBottom: 16,
  },

  title: {
    fontFamily: FONTS.BOLD,
    color: COLORS.WHITE,
    fontSize: 14,
    marginBottom: 16,
  },

  subtitle: {
    fontFamily: FONTS.REGULAR,
    color: COLORS.WHITE,
    fontSize: 12,
    marginBottom: 16,
  },
});