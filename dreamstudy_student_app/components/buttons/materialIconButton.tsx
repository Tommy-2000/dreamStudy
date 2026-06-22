import { MaterialIconButtonProps } from '@/utils/types/buttonProps';
import Octicons from '@expo/vector-icons/Octicons';
import { PressableScale } from 'pressto';
import { TextCard } from '../textCard';

export function MaterialIconButton({
  onPress,
  style,
  title,
  accessibilityHint,
  iconName,
  iconSize
}: MaterialIconButtonProps) {
  return (
    <PressableScale
      onPress={onPress}
      style={style}
      accessibilityHint={accessibilityHint}
      accessibilityLabel={title}
      accessibilityRole="button">
      <TextCard>
        <Octicons name={iconName} size={iconSize} />
        {title}
      </TextCard>
    </PressableScale>
  );
}
