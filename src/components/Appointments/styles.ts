import { StyleSheet } from 'react-native';

import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignSelf: 'center',
    width: '100%',
  },
  guildIconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 64,
    height: 68,
    marginRight: 20,
    borderRadius: 8,
  },
  content: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 12,
  },
  title: {
    color: theme.colors.heading,
    fontFamily: theme.fonts.title700,
    fontSize: 18,
  },
  category: {
    color: theme.colors.highlight,
    fontFamily: theme.fonts.text400,
    fontSize: 13,
    marginRight: 24,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  dateInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  date: {
    color: theme.colors.heading,
    fontFamily: theme.fonts.text500,
    fontSize: 13,
    marginLeft: 7,
  },
  playersInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  player: {
    fontFamily: theme.fonts.text500,
    fontSize: 13,
    marginLeft: 7,
    marginRight: 24,
  },
});