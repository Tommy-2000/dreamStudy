import { PressableScale } from 'pressto';
import { Card } from '../card';
import { TextCard } from '../textCard';
import { MaterialButtonProps } from './materialButton';

export interface MaterialToolButtonProps extends MaterialButtonProps {}

export function MaterialToolButton({
  onPress,
  style,
  title,
  accessibilityHint
}: MaterialToolButtonProps) {
  return (
    <PressableScale
      onPress={onPress}
      style={style}
      accessibilityHint={accessibilityHint}
      accessibilityLabel={title}
      accessibilityRole="button">
      <Card>
        <TextCard>{title}</TextCard>
      </Card>
    </PressableScale>
  );
}
