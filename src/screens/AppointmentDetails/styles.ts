import { StyleSheet } from "react-native";
import { getBottomSpace } from "react-native-iphone-x-helper";

import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  banner: {
    justifyContent: 'flex-end',
    width: '100%',
    height: 234,
    marginBottom: 30,
  },
  bannerContent: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 24,
    marginBottom: 30,
  },
  title: {
    color: theme.colors.heading,
    fontFamily: theme.fonts.title700,
    fontSize: 28,
  },
  subtitle: {
    color: theme.colors.heading,
    fontFamily: theme.fonts.text400,
    fontSize: 13,
  },
  members: {
    marginTop: 27,
    marginLeft: 24,
  },
  footer: {
    marginBottom: getBottomSpace(),
    paddingHorizontal: 24,
    paddingVertical: 20,
  },
});