import * as Sentry from '@sentry/react-native';
import { Image } from 'expo-image';
import { Platform } from 'react-native';

import { MaterialButton } from '@/components/ui/react/buttons/materialButton';
import { Card } from '@/components/ui/react/cards/card';
import ParallaxScrollCard from '@/components/ui/react/cards/parallaxScrollCard';
import { TextCard } from '@/components/ui/react/cards/textCard';
import { HelloWave } from '@/components/ui/react/helloWave';
import { buttonStyles, homeScreenStyles } from '@/utils/appStyles';
import { useUnistyles } from 'react-native-unistyles';

export default function HomeScreen() {
  const { theme } = useUnistyles();

  return (
    <ParallaxScrollCard
      headerBackgroundColor={{}}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={homeScreenStyles.reactLogo}
        />
      }>
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
          title="Send a test error to Sentry"
          style={buttonStyles.primaryButton}
          onPress={() => {
            Sentry.captureException(new Error('First error'));
          }}
        />
      </Card>
    </ParallaxScrollCard>
  );
}
