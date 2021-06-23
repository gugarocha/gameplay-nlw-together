import { StyleSheet } from 'react-native';

import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 104,
    height: 120,
    marginRight: 8,
    borderRadius: 8,
  },
  content: {
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 100,
    height: 116,
    paddingVertical: 7,
    borderRadius: 8,
    backgroundColor: theme.colors.secondary40,
  },
  title: {
    color: theme.colors.heading,
    fontFamily: theme.fonts.title500,
    fontSize: 15,
  },
  check: {
    alignSelf: 'flex-end',
    width: 12,
    height: 12,
    marginRight: 7,
    backgroundColor: theme.colors.secondary100,
    borderRadius: 3,
    borderColor: theme.colors.secondary50,
    borderWidth: 2,
  },
  checked: {
    alignSelf: 'flex-end',
    width: 10,
    height: 10,
    marginRight: 7,
    borderRadius: 3,
    backgroundColor: theme.colors.primary,
  },
});