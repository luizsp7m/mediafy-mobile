import { StyleSheet } from "react-native";
import { COLORS, FONTS } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    
  },

  overview: {
    paddingHorizontal: 16,
    marginBottom: 12,
  },

  overview_header: {
    fontFamily: FONTS.MEDIUM,
    color: COLORS.WHITE,
    fontSize: 14,
    marginBottom: 6,
  },

  overview_content: {
    fontFamily: FONTS.REGULAR,
    color: COLORS.WHITE,
    fontSize: 12,
    lineHeight: 18,
  },
});