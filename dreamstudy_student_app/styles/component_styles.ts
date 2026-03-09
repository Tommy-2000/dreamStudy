import { appValues } from '@/unistyles';
import { StyleSheet } from 'react-native-unistyles';

export const navigationStyles = StyleSheet.create(theme => ({
  tabs: {
    borderRadius: 20
  },
  drawer: {
    borderRadius: 20
  }
}));

export const cardStyles = StyleSheet.create(theme => ({
  default: {
    borderRadius: 20
  },
  parallaxScrollHeader: {
    height: appValues.parallaxHeaderHeight,
    overflow: 'hidden'
  },
  parallaxScrollContent: {
    borderRadius: 20,
    flex: 1,
    padding: 32,
    gap: 16,
    overflow: 'hidden'
  },
  flashScroll: {
    borderRadius: 20
  },
  modalHeader: {
    height: '16%',
    backgroundColor: theme.colors.background,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  modalContent: {
    height: '25%',
    width: '100%',
    backgroundColor: theme.colors.background,
    borderTopRightRadius: 18,
    borderTopLeftRadius: 18,
    position: 'absolute',
    bottom: 0
  },
  search: {
    borderRadius: 20
  },
  student: { borderRadius: 20, padding: 10, flex: 1 },
  teacher: { borderRadius: 20, padding: 10, flex: 1 },
  supportAssistant: { borderRadius: 20, padding: 10, flex: 1 }
}));
