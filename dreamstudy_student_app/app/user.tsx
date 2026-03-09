import { Image } from 'expo-image';
import { Platform } from 'react-native';

import { CollapsibleCard } from '@/components/ui/react/cards/collapsible_card';
import ParallaxScrollCard from '@/components/ui/react/cards/parallax_scroll_card';
import { TextCard } from '@/components/ui/react/cards/text_card';
import { ExternalLinkCard } from '@/components/ui/react/external-link';
import { IconSymbol } from '@/components/ui/react/icon-symbol';
import { Fonts } from '@/styles/text_styles';

export default function UserScreen() {
   return (
      <ParallaxScrollCard
         headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
         headerImage={
            <IconSymbol
               size={310}
               color="#808080"
               name="chevron.left.forwardslash.chevron.right"
            />
         }
      >
         <TextCard type="title">User</TextCard>
         <TextCard>
            This app includes example code to help you get started.
         </TextCard>
         <CollapsibleCard title="File-based routing">
            <TextCard>
               This app has two screens:{' '}
               <TextCard type="defaultSemiBold">app/(tabs)/index.tsx</TextCard>{' '}
               and{' '}
               <TextCard type="defaultSemiBold">
                  app/(tabs)/explore.tsx
               </TextCard>
            </TextCard>
            <TextCard>
               The layout file in{' '}
               <TextCard type="defaultSemiBold">
                  app/(tabs)/_layout.tsx
               </TextCard>{' '}
               sets up the tab navigator.
            </TextCard>
            <ExternalLinkCard href="https://docs.expo.dev/router/introduction">
               <TextCard type="link">Learn more</TextCard>
            </ExternalLinkCard>
         </CollapsibleCard>
         <CollapsibleCard title="Android, iOS, and web support">
            <TextCard>
               You can open this project on Android, iOS, and the web. To open
               the web version, press{' '}
               <TextCard type="defaultSemiBold">w</TextCard> in the terminal
               running this project.
            </TextCard>
         </CollapsibleCard>
         <CollapsibleCard title="Images">
            <TextCard>
               For static images, you can use the{' '}
               <TextCard type="defaultSemiBold">@2x</TextCard> and{' '}
               <TextCard type="defaultSemiBold">@3x</TextCard> suffixes to
               provide files for different screen densities
            </TextCard>
            <Image
               source={require('@/assets/images/react-logo.png')}
               style={{ width: 100, height: 100, alignSelf: 'center' }}
            />
            <ExternalLinkCard href="https://reactnative.dev/docs/images">
               <TextCard type="link">Learn more</TextCard>
            </ExternalLinkCard>
         </CollapsibleCard>
         <CollapsibleCard title="Light and dark mode components">
            <TextCard>
               This template has light and dark mode support. The{' '}
               <TextCard type="defaultSemiBold">useColorScheme()</TextCard> hook
               lets you inspect what the user&apos;s current color scheme is,
               and so you can adjust UI colors accordingly.
            </TextCard>
            <ExternalLinkCard href="https://docs.expo.dev/develop/user-interface/color-themes/">
               <TextCard type="link">Learn more</TextCard>
            </ExternalLinkCard>
         </CollapsibleCard>
         <CollapsibleCard title="Animations">
            <TextCard>
               This template includes an example of an animated component. The{' '}
               <TextCard type="defaultSemiBold">
                  components/HelloWave.tsx
               </TextCard>{' '}
               component uses the powerful{' '}
               <TextCard
                  type="defaultSemiBold"
                  style={{ fontFamily: Fonts.mono }}
               >
                  react-native-reanimated
               </TextCard>{' '}
               library to create a waving hand animation.
            </TextCard>
            {Platform.select({
               ios: (
                  <TextCard>
                     The{' '}
                     <TextCard type="defaultSemiBold">
                        components/ParallaxScrollView.tsx
                     </TextCard>{' '}
                     component provides a parallax effect for the header image.
                  </TextCard>
               )
            })}
         </CollapsibleCard>
      </ParallaxScrollCard>
   );
}
