import { ToolbarButtonProps } from '@/utils/types/props/buttonProps';
import { Palette } from 'lucide-react-native';
import { PressableScale } from 'pressto';

export function ColorPickerButton({
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
      <Palette />
    </PressableScale>
  );
}
