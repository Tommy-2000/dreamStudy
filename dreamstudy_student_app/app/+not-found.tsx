import MaterialLinkButton from '@/components/buttons/materialLinkButton';
import { Card } from '../components/card';
import { TextCard } from '../components/textCard';

export default function NotFoundScreen() {
  return (
    <Card>
      <TextCard>Sorry, this page cannot be found</TextCard>
      <MaterialLinkButton
        href="/"
        accessibilityHint={'Return to the Home Screen'}
      />
    </Card>
  );
}
