import { buttonStyles } from '@/utils/appStyles';
import { ToolbarButtonProps } from '@/utils/types/buttonProps';
import { Save } from 'lucide-react-native';
import { PressableOpacity } from 'pressto';

export function SaveNoteButton({
  onPress,
  selected,
  accessibilityHint
}: ToolbarButtonProps) {
  return (
    <PressableOpacity
      onPress={onPress}
      style={
        selected
          ? buttonStyles.toolbarButton
          : buttonStyles.selectedToolbarButton
      }
      accessibilityHint={accessibilityHint}
      accessibilityRole="toolbar">
      <Save />
    </PressableOpacity>
  );
}
