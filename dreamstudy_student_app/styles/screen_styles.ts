import { StyleSheet } from 'react-native-unistyles';

export const rootScreenStyles = StyleSheet.create(theme => ({
  headerGradientStyle: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    height: 100
  },
  tabStyle: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 1000,
    borderRadius: '100'
  },
  drawerStyle: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    borderRadius: '100'
  }
}));

export const homeScreenStyles = StyleSheet.create(theme => ({
  titleStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8
  },
  bodyStyle: {
    gap: 8,
    marginBottom: 8
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute'
  }
}));

export const studyScreenStyles = StyleSheet.create(theme => ({
  headerImage: {
    bottom: -90,
    left: -35,
    position: 'absolute'
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8
  }
}));

export const notesScreenStyles = StyleSheet.create(theme => ({
  headerImage: {
    bottom: -90,
    left: -35,
    position: 'absolute'
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute'
  }
}));

export const journeyScreenStyles = StyleSheet.create(theme => ({
  headerImage: {
    bottom: -90,
    left: -35,
    position: 'absolute'
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8
  }
}));

export const supportScreenStyles = StyleSheet.create(theme => ({
  headerImage: {
    bottom: -90,
    left: -35,
    position: 'absolute'
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute'
  }
}));
