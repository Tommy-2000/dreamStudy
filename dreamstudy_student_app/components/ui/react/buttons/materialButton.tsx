import { AnimatedPressableOptions, PressableScale } from 'pressto';
import { Card } from '../card';
import { TextCard } from '../textCard';

export interface MaterialButtonProps {
  onPress: ((options: AnimatedPressableOptions) => void) | undefined;
  style: {};
  title?: string;
  accessibilityHint: string;
}

export function MaterialButton({
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
