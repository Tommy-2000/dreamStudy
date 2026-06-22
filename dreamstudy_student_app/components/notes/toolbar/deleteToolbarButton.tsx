import { buttonStyles } from '@/utils/appStyles';
import { ToolbarButtonProps } from '@/utils/types/buttonProps';
import { Trash } from 'lucide-react-native';
import { PressableOpacity } from 'pressto';

export function DeleteButton({
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
      <Trash />
    </PressableOpacity>
  );
}
