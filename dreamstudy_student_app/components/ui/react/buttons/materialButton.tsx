import { GestureResponderEvent, TouchableOpacity } from 'react-native';
import { Card } from '../card';
import { TextCard } from '../cards/textCard';

export interface MaterialButtonProps {
  onPress: ((event: GestureResponderEvent) => void) | undefined;
  style: {};
  title: string;
  accessibilityHint: string;
}

export function MaterialButton({
  onPress,
  style,
  title,
  accessibilityHint
}: MaterialButtonProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={style}
      accessibilityHint={accessibilityHint}
      accessibilityLabel={title}
      accessibilityRole="button">
      <Card>
        <TextCard>{title}</TextCard>
      </Card>
    </TouchableOpacity>
  );
}
