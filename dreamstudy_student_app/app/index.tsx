import * as Sentry from '@sentry/react-native';
import { Platform } from 'react-native';

import { MaterialButton } from '@/components/ui/react/buttons/materialButton';
import { Card } from '@/components/ui/react/card';
import ScrollCard from '@/components/ui/react/cards/scrollCard';
import { TextCard } from '@/components/ui/react/cards/textCard';
import { HelloWave } from '@/components/ui/react/helloWave';
import { buttonStyles, homeScreenStyles } from '@/utils/appStyles';
import { useUnistyles } from 'react-native-unistyles';

const SENTRY_TEST_BUTTON = 'Send a test error to Sentry';
export default function HomeScreen() {
  const { theme } = useUnistyles();

  return (
    <ScrollCard>
      <Card style={homeScreenStyles.titleStyle}>
        <TextCard type="title">Welcome Student Name!</TextCard>
        <HelloWave />
      </Card>
      <Card style={homeScreenStyles.bodyStyle}>
        <TextCard type="subtitle">Your Revision</TextCard>
        <TextCard>
          Edit <TextCard type="defaultSemiBold">app/(tabs)/index.tsx</TextCard>{' '}
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
        <TextCard type="subtitle">Your Lessons</TextCard>
        <TextCard>
          Edit <TextCard type="defaultSemiBold">app/(tabs)/index.tsx</TextCard>{' '}
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
          title={SENTRY_TEST_BUTTON}
          style={buttonStyles.accentButton}
          accessibilityHint={SENTRY_TEST_BUTTON}
          onPress={() => {
            Sentry.captureException(new Error('Test Error'));
          }}
        />
      </Card>
    </ScrollCard>
  );
}
