import { MaterialButtonProps } from '@/utils/types/props/buttonProps';
import { PressableScale } from 'pressto';
import { Card } from '../card';
import { TextCard } from '../textCard';

export function MaterialToolButton({
  onPress,
  style,
  title,
  accessibilityHint
}: MaterialButtonProps) {
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
