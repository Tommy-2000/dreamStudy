import { ToolbarButtonProps } from '@/utils/types/props/buttonProps';
import { SquareDashed } from 'lucide-react-native';
import { PressableScale } from 'pressto';

export function SelectionButton({
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
      <SquareDashed />
    </PressableScale>
  );
}
