import { TouchableOpacity } from 'react-native';
import { Card } from '../card';
import { TextCard } from '../cards/textCard';
import { MaterialButtonProps } from './materialButton';

export interface MaterialToolButtonProps extends MaterialButtonProps {}

export function MaterialToolButton({
  onPress,
  style,
  title,
  accessibilityHint
}: MaterialToolButtonProps) {
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
