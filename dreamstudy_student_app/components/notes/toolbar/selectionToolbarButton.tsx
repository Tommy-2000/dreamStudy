import { buttonStyles } from '@/utils/appStyles';
import { ToolbarButtonProps } from '@/utils/types/buttonProps';
import { SquareDashed } from 'lucide-react-native';
import { PressableOpacity } from 'pressto';

export function SelectionButton({
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
      <SquareDashed />
    </PressableOpacity>
  );
}
