import Ionicons from '@expo/vector-icons/Ionicons';
import { Drawer } from 'expo-router/drawer';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

import * as Sentry from '@sentry/react-native';
import { Tabs } from 'expo-router';
import { FiberProvider } from 'its-fine';
import React from 'react';
import { Platform } from 'react-native';
import { useUnistyles } from 'react-native-unistyles';

// Initialise the Sentry SDK for performance and error logging
Sentry.init({
  dsn: 'https://c73380ff81478f5ab63ff2684293a3e7@o4510828122996736.ingest.de.sentry.io/4510828124962896',

  // Adds more context data to events (IP address, cookies, user, etc.)
  sendDefaultPii: false, // ONLY SET TO TRUE IF THE APP IS IN A TESTING ENVIRONMENT!

  // Enable Logs
  enableLogs: false,
  integrations: [Sentry.feedbackIntegration()]
});

// Wrap the root of the app with the Sentry SDK
export default Sentry.wrap(function RootLayout() {
  const { theme } = useUnistyles();

  if (Platform.OS === 'web') {
    // If this app is running on Android or iOS, show the drawer layout
    // Otherwise if the app is running on Web, show the Tabs layout
    return (
      // Wrap the root layout with FibreProvider to allow for context to be shared between Skia components
      <FiberProvider>
        <React.Fragment>
          <Tabs
            screenOptions={{
              tabBarPosition: 'right',
              tabBarActiveTintColor: theme.colors.activeTint,
              tabBarInactiveTintColor: theme.colors.tint,
              sceneStyle: {
                backgroundColor: theme.colors.background
              },
              tabBarStyle: {
                backgroundColor: theme.colors.foreground
              },
              tabBarIconStyle: {
                color: theme.colors.foreground
              },
              headerShown: false
            }}>
            <Tabs.Screen
              name="index"
              options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({ focused, color, size }) => {
                  if (focused) {
                    return <Ionicons name="home" size={size} color={color} />;
                  } else {
                    return (
                      <Ionicons name="home-outline" size={size} color={color} />
                    );
                  }
                },
                title: 'Home'
              }}
            />
            <Tabs.Screen
              name="study"
              options={{
                tabBarIcon: ({ focused, color, size }) => {
                  if (focused) {
                    return <Ionicons name="book" size={size} color={color} />;
                  } else {
                    return (
                      <Ionicons name="book-outline" size={size} color={color} />
                    );
                  }
                },
                tabBarLabel: 'Study',
                title: 'Study'
              }}
            />
            <Tabs.Screen
              name="notes"
              options={{
                tabBarIcon: ({ focused, color, size }) => {
                  if (focused) {
                    return <Ionicons name="albums" size={size} color={color} />;
                  } else {
                    return (
                      <Ionicons
                        name="albums-outline"
                        size={size}
                        color={color}
                      />
                    );
                  }
                },
                tabBarLabel: 'Notes',
                title: 'Notes'
              }}
            />
            <Tabs.Screen
              name="journey"
              options={{
                tabBarIcon: ({ focused, color, size }) => {
                  if (focused) {
                    return <Ionicons name="map" size={size} color={color} />;
                  } else {
                    return (
                      <Ionicons name="map-outline" size={size} color={color} />
                    );
                  }
                },
                tabBarLabel: 'Journey',
                title: 'Journey'
              }}
            />
            <Tabs.Screen
              name="support"
              options={{
                tabBarIcon: ({ focused, color, size }) => {
                  if (focused) {
                    return <Ionicons name="help" size={size} color={color} />;
                  } else {
                    return (
                      <Ionicons name="help-outline" size={size} color={color} />
                    );
                  }
                },
                tabBarLabel: 'Support',
                title: 'Support'
              }}
            />
            <Tabs.Screen
              name="user"
              options={{
                tabBarIcon: ({ focused, color, size }) => {
                  if (focused) {
                    return <Ionicons name="person" size={size} color={color} />;
                  } else {
                    return (
                      <Ionicons
                        name="person-outline"
                        size={size}
                        color={color}
                      />
                    );
                  }
                },
                tabBarLabel: 'User',
                title: 'User'
              }}
            />
          </Tabs>
          <StatusBar style="auto" />
        </React.Fragment>
      </FiberProvider>
    );
  }

  return (
    <FiberProvider>
      <React.Fragment>
        <Drawer
          screenOptions={{
            drawerPosition: 'right',
            drawerActiveTintColor: theme.colors.activeTint,
            drawerInactiveTintColor: theme.colors.tint,
            sceneStyle: {
              backgroundColor: theme.colors.background
            },
            drawerStyle: {
              backgroundColor: theme.colors.foreground
            },
            drawerType: 'front',
            drawerStatusBarAnimation: 'fade'
          }}>
          <Drawer.Screen
            name="index"
            options={{
              drawerLabel: 'Home',
              drawerIcon: ({ focused, color, size }) => {
                if (focused) {
                  return <Ionicons name="home" size={size} color={color} />;
                } else {
                  return (
                    <Ionicons name="home-outline" size={size} color={color} />
                  );
                }
              },
              title: 'Home'
            }}
          />
          <Drawer.Screen
            name="study"
            options={{
              drawerLabel: 'Study',
              drawerIcon: ({ focused, color, size }) => {
                if (focused) {
                  return <Ionicons name="book" size={size} color={color} />;
                } else {
                  return (
                    <Ionicons name="book-outline" size={size} color={color} />
                  );
                }
              },
              title: 'Study'
            }}
          />
          <Drawer.Screen
            name="notes"
            options={{
              drawerLabel: 'Notes',
              drawerIcon: ({ focused, color, size }) => {
                if (focused) {
                  return <Ionicons name="albums" size={size} color={color} />;
                } else {
                  return (
                    <Ionicons name="albums-outline" size={size} color={color} />
                  );
                }
              },
              title: 'Notes'
            }}
          />
          <Drawer.Screen
            name="journey"
            options={{
              drawerLabel: 'Journey',
              drawerIcon: ({ focused, color, size }) => {
                if (focused) {
                  return <Ionicons name="map" size={size} color={color} />;
                } else {
                  return (
                    <Ionicons name="map-outline" size={size} color={color} />
                  );
                }
              },
              title: 'Journey'
            }}
          />
          <Drawer.Screen
            name="account"
            options={{
              drawerLabel: 'Account',
              drawerIcon: ({ focused, color, size }) => {
                if (focused) {
                  return <Ionicons name="person" size={size} color={color} />;
                } else {
                  return (
                    <Ionicons name="person-outline" size={size} color={color} />
                  );
                }
              },
              title: 'Account'
            }}
          />
        </Drawer>
        <StatusBar style="auto" />
      </React.Fragment>
    </FiberProvider>
  );
});
