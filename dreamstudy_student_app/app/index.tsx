import * as Sentry from '@sentry/react-native';
import { Image } from 'expo-image';
import { Button, Platform } from 'react-native';

import { Card } from '@/components/ui/react/cards/card';
import ParallaxScrollCard from '@/components/ui/react/cards/parallax_scroll_card';
import { TextCard } from '@/components/ui/react/cards/text_card';
import { HelloWave } from '@/components/ui/react/hello-wave';
import { homeScreenStyles } from '@/styles/screen_styles';
import { useUnistyles } from 'react-native-unistyles';

export default function HomeScreen() {
  const { theme } = useUnistyles();

  return (
    <ParallaxScrollCard
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
        <Button
          title="Send a test error to Sentry"
          onPress={() => {
            Sentry.captureException(new Error('First error'));
          }}
        />
      </Card>
    </ParallaxScrollCard>
  );
}
