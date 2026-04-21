import type { CalendarTheme } from '@marceloterreiro/flash-calendar';
import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
import { DrawerNavigationOptions } from '@react-navigation/drawer';
import { HeaderOptions } from '@react-navigation/elements';
import { Tabs } from 'expo-router';
import Drawer from 'expo-router/drawer';
import { Platform } from 'react-native';
import { StyleSheet, withUnistyles } from 'react-native-unistyles';
import { appValues } from './appConstants';
import { calendarCardTokenColours as calendarTokenColours } from './appTokenColours';

// Screen Styling

export const rootScreenStyles = StyleSheet.create({
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
});

export const homeScreenStyles = StyleSheet.create({
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
});

export const revisionScreenStyles = StyleSheet.create({
  headerImage: {
    bottom: -90,
    left: -35,
    position: 'absolute'
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8
  }
});

export const notesScreenStyles = StyleSheet.create({
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
});

export const journeyScreenStyles = StyleSheet.create({
  headerImage: {
    bottom: -90,
    left: -35,
    position: 'absolute'
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8
  }
});

export const supportScreenStyles = StyleSheet.create({
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
});

// React Navigation Options

export const tabScreenOptions: BottomTabNavigationOptions & HeaderOptions = {
  tabBarPosition: 'right',
  headerShown: false
};

export const drawerScreenOptions: DrawerNavigationOptions & HeaderOptions = {
  drawerPosition: 'right',
  drawerType: 'front',
  drawerStatusBarAnimation: 'fade'
};

// Navigation Styling

// withUnistyles works best for components with custom props
// useUnistyles causes a crash when switching themes and re-rendering React Navigation components

export const RootTabs = withUnistyles(Tabs, theme => ({
  screenOptions: {
    tabBarActiveTintColor: theme.colors.activeTint,
    tabBarInactiveTintColor: theme.colors.typography,
    sceneStyle: {
      backgroundColor: theme.colors.background
    },
    tabBarStyle: {
      backgroundColor: theme.colors.foreground
    },
    tabBarIconStyle: {
      color: theme.colors.foreground
    }
  }
}));

export const RootDrawer = withUnistyles(Drawer, theme => ({
  screenOptions: {
    drawerActiveTintColor: theme.colors.activeTint,
    drawerInactiveTintColor: theme.colors.tint,
    sceneStyle: {
      backgroundColor: theme.colors.background
    },
    drawerStyle: {
      backgroundColor: theme.colors.foreground
    }
  }
}));

// Component Styling

export const navigationStyles = StyleSheet.create({
  tabs: {
    borderRadius: 20
  },
  drawer: {
    borderRadius: 20
  }
});

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
    gap: 16
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
  searchContainer: {
    borderRadius: 20,
    padding: 5,
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  searchCardTapped: {},
  searchCardUntapped: {},
  searchTextInput: {
    padding: 5,
    width: '90%'
  },
  student: {
    borderRadius: 20,
    padding: 10,
    flex: 1,
    backgroundColor: theme.colors.accents.apple
  },
  teacher: {
    borderRadius: 20,
    padding: 10,
    flex: 1,
    backgroundColor: theme.colors.accents.banana
  },
  supportAssistant: {
    borderRadius: 20,
    padding: 10,
    flex: 1,
    backgroundColor: theme.colors.accents.pumpkin
  },
  revision: {
    borderRadius: 20,
    padding: 10,
    flex: 1,
    backgroundColor: theme.colors.accents.storm
  }
}));

export const buttonStyles = StyleSheet.create(theme => ({
  primaryButton: {
    backgroundColor: theme.colors.accents.apple,
    borderRadius: 10,
    elevation: 6
  },
  secondaryButton: {
    backgroundColor: theme.colors.background,
    borderRadius: 10,
    elevation: 6
  },
  aacButton: {
    backgroundColor: theme.colors.background,
    borderRadius: 10,
    elevation: 10
  },
  iconButton: {
    backgroundColor: theme.colors.background,
    borderRadius: 10,
    elevation: 10
  }
}));

export const calendarTheme: CalendarTheme = {
  rowMonth: {
    container: {
      backgroundColor: calendarTokenColours.colours.accent,
      height: 40
    },
    content: {
      color: calendarTokenColours.colours.content.inverse.primary,
      fontSize: 17,
      width: 200,
      textAlign: 'center'
    }
  },
  itemWeekName: { content: { color: calendarTokenColours.colours.accent } },
  itemDay: {
    base: () => ({
      container: {
        padding: 0,
        borderRadius: 0
      }
    }),
    today: () => ({
      container: {
        borderWidth: 2,
        borderColor: calendarTokenColours.colours.secondary
      }
    }),
    idle: ({ isDifferentMonth }) => ({
      content: isDifferentMonth
        ? {
            color: calendarTokenColours.colours.content.disabled
          }
        : undefined
    }),
    active: () => ({
      container: {
        backgroundColor: calendarTokenColours.colours.accent,
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0
      },
      content: {
        color: calendarTokenColours.colours.content.inverse.primary
      }
    })
  }
};

export const imageStyles = StyleSheet.create({
  smallImage: {
    flex: 1,
    width: '25%'
  },
  mediumImage: {
    flex: 1,
    width: '50%'
  },
  largeImage: {
    flex: 1,
    width: '75%'
  },
  extraLargeImage: {
    flex: 1,
    width: '100%'
  }
});

// Text Styling

export const Fonts = Platform.select({
  ios: {
    /** iOS `UIFontDescriptorSystemDesignDefault` */
    sans: 'system-ui',
    /** iOS `UIFontDescriptorSystemDesignSerif` */
    serif: 'ui-serif',
    /** iOS `UIFontDescriptorSystemDesignRounded` */
    rounded: 'ui-rounded',
    /** iOS `UIFontDescriptorSystemDesignMonospaced` */
    mono: 'ui-monospace'
  },
  default: {
    sans: 'normal',
    serif: 'serif',
    rounded: 'normal',
    mono: 'monospace'
  },
  web: {
    sans: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    serif: "Georgia, 'Times New Roman', serif",
    rounded:
      "'SF Pro Rounded', 'Hiragino Maru Gothic ProN', Meiryo, 'MS PGothic', sans-serif",
    mono: "SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace"
  }
});

export const textStyles = StyleSheet.create(theme => ({
  textType: {
    variants: {
      type: {
        default: {
          fontSize: 16,
          lineHeight: 24,
          fontFamily: Fonts.sans
        },
        defaultSemiBold: {
          fontSize: 16,
          lineHeight: 24,
          fontWeight: '600',
          fontFamily: Fonts.sans
        },
        title: {
          fontSize: 32,
          fontWeight: 'bold',
          lineHeight: 32,
          fontFamily: Fonts.sans
        },
        subtitle: {
          fontSize: 20,
          fontWeight: 'bold',
          fontFamily: Fonts.sans
        },
        link: {
          lineHeight: 30,
          fontSize: 16,
          color: '#0a7ea4',
          fontFamily: Fonts.sans
        }
      }
    }
  },

  textColor: {
    color: theme.colors.typography
  }
}));
