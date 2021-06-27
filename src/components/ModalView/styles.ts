import { StyleSheet } from 'react-native';

import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 100,
  },
  overlay: {
    flex: 1,
    backgroundColor: theme.colors.overlay,
  },
  bar: {
    alignSelf: 'center',
    width: 39,
    height: 2,
    marginTop: 13,
    borderRadius: 2,
    backgroundColor: theme.colors.secondary30,
  },
});