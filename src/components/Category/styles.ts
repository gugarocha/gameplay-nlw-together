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
    paddingVertical: 20,
    borderRadius: 8,
  },
  title: {
    color: theme.colors.heading,
    fontFamily: theme.fonts.title700,
    fontSize: 15,
  },
  check: {
    position: 'absolute',
    top: 7,
    right: 7,
    width: 12,
    height: 12,
    backgroundColor: theme.colors.secondary100,
    borderRadius: 3,
    borderColor: theme.colors.secondary50,
    borderWidth: 2,
  },
  checked: {
    position: 'absolute',
    top: 7,
    right: 7,
    width: 10,
    height: 10,
    borderRadius: 3,
    backgroundColor: theme.colors.primary,
  },
});