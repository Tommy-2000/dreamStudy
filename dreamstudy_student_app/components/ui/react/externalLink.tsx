import { Href, Link } from 'expo-router';
import {
  openBrowserAsync,
  WebBrowserPresentationStyle
} from 'expo-web-browser';
import { type ComponentProps } from 'react';
import { Card } from './card';

type HrefProps = Omit<ComponentProps<typeof Link>, 'href'> & {
  href: Href & string;
};

export function ExternalLinkCard({ href, ...rest }: HrefProps) {
  return (
    <Card>
      <Link
        target="_blank" // Opens in a new tab by default
        {...rest}
        href={href}
        onPress={async event => {
          if (process.env.EXPO_OS !== 'web') {
            // Prevent the default behavior of linking to the default browser on native.
            event.preventDefault();
            // Open the link in an in-app browser.
            await openBrowserAsync(href, {
              presentationStyle: WebBrowserPresentationStyle.AUTOMATIC
              // Default browser presentation based on the user's device preferences
            });
          }
        }}
      />
    </Card>
  );
}
