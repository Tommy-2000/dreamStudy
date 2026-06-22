import * as Sentry from '@sentry/react-native';
import { Platform } from 'react-native';

import { MaterialButton } from '@/components/buttons/materialButton';
import { Card } from '@/components/card';
import ParallaxScrollCard from '@/components/parallaxScrollCard';
import { SkiaGradientContainer } from '@/components/skiaGradientContainer';
import { TextCard } from '@/components/textCard';
import { homeStore } from '@/state/appStores';
import { stringValues } from '@/utils/appConstants';
import { buttonStyles, homeScreenStyles } from '@/utils/appStyles';
import { FiberProvider } from 'its-fine';
import { useUnistyles } from 'react-native-unistyles';
import { Provider } from 'react-redux';

export default function HomeScreen() {
  const { theme } = useUnistyles();

  return (
    // Wrap the root of each screen with FibreProvider to allow for context
    //  to be shared between Skia components that are rendered on each screen
    <Provider store={homeStore}>
      <FiberProvider>
        <ParallaxScrollCard
          headerBackgroundColor={{}}
          headerBackground={<SkiaGradientContainer />}>
          <Card style={homeScreenStyles.titleStyle}>
            <TextCard type="title">Welcome Student Name!</TextCard>
          </Card>
          <Card style={homeScreenStyles.bodyStyle}>
            <TextCard type="subtitle">Recent Revision</TextCard>
            <TextCard>
              Edit{' '}
              <TextCard type="defaultSemiBold">app/(tabs)/index.tsx</TextCard>{' '}
              to see changes. Press{' '}
              <TextCard type="defaultSemiBold">
                {Platform.select({
                  ios: 'cmd + d',
                  android: 'cmd + m',
                  web: 'F12'
                })}
              </TextCard>{' '}
              to open developer tools.
            </TextCard>
          </Card>
          <Card style={homeScreenStyles.bodyStyle}>
            <TextCard type="subtitle">Upcoming Lessons</TextCard>
            <TextCard>
              Edit{' '}
              <TextCard type="defaultSemiBold">app/(tabs)/index.tsx</TextCard>{' '}
              to see changes. Press{' '}
              <TextCard type="defaultSemiBold">
                {Platform.select({
                  ios: 'cmd + d',
                  android: 'cmd + m',
                  web: 'F12'
                })}
              </TextCard>{' '}
              to open developer tools.
            </TextCard>
          </Card>

          <Card>
            <MaterialButton
              title={stringValues.SENTRY_TEST_BUTTON}
              style={buttonStyles.accentButton}
              accessibilityHint={stringValues.SENTRY_TEST_BUTTON}
              onPress={() => {
                Sentry.captureException(new Error('Test Error'));
              }}
            />
          </Card>
        </ParallaxScrollCard>
      </FiberProvider>
    </Provider>
  );
}
