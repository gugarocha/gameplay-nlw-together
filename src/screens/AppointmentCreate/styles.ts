import { StyleSheet } from "react-native";

import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  label: {
    color: theme.colors.heading,
    fontFamily: theme.fonts.title700,
    fontSize: 18,
  },
  form: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  select: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: 68,
    paddingRight: 25,
    borderWidth: 1,
    borderColor: theme.colors.secondary50,
    borderRadius: 8,
    overflow: 'hidden',
  },
  selectBody: {
    flex: 1,
    alignItems: 'center',
  },
  image: {
    width: 64,
    height: 68,
    backgroundColor: theme.colors.secondary50,
    borderRadius: 8,
    borderWidth: 1,
  },
  field: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 30,
  },
  column: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  divider: {
    marginRight: 4,
    color: theme.colors.highlight,
    fontFamily: theme.fonts.text500,
    fontSize: 15,
  },
  caracteresLimit: {
    color: theme.colors.highlight,
    fontFamily: theme.fonts.text400,
    fontSize: 13,
  },
  footer: {
    marginVertical: 20,
    marginBottom: 56,
  },
});