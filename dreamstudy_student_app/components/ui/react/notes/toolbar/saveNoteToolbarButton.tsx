import { ToolbarButtonProps } from '@/utils/types/props/buttonProps';
import { Save } from 'lucide-react-native';
import { PressableScale } from 'pressto';

export function SaveNoteButton({
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
      <Save />
    </PressableScale>
  );
}
