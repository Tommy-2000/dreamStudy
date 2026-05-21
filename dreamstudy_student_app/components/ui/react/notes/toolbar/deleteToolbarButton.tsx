import { ToolbarButtonProps } from '@/utils/types/props/buttonProps';
import { Trash } from 'lucide-react-native';
import { PressableScale } from 'pressto';

export function DeleteButton({
  onPress,
  style,
  selected,
  accessibilityHint
}: ToolbarButtonProps) {
  return (
    <PressableScale
      onPress={onPress}
      style={style}
      accessibilityHint={accessibilityHint}
      accessibilityRole="toolbar">
      <Trash />
    </PressableScale>
  );
}
