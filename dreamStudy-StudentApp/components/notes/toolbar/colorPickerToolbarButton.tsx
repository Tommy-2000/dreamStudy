import { buttonStyles } from '@/utils/appStyles';
import { ToolbarButtonProps } from '@/utils/types/buttonProps';
import { SkColor, SkSize } from '@shopify/react-native-skia';
import { Palette } from 'lucide-react-native';
import { PressableOpacity } from 'pressto';

interface ColorPickerButtonProps extends ToolbarButtonProps {
  color: SkColor;
  size: SkSize;
  backgroundColour: SkColor;
  onColorPress: (color: string) => void;
}

export function ColorPickerButton({
  selected,
  accessibilityHint,
  color,
  size,
  backgroundColour,
  onColorPress
}: ColorPickerButtonProps) {
  return (
    <PressableOpacity
      onPress={() => onColorPress('colors')}
      style={
        selected
          ? buttonStyles.toolbarButton
          : buttonStyles.selectedToolbarButton
      }
      accessibilityHint={accessibilityHint}
      accessibilityRole="toolbar">
      <Palette />
    </PressableOpacity>
  );
}
