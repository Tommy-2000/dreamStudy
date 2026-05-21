import { Palette } from 'lucide-react-native';
import { AnimatedPressableOptions, PressableWithoutFeedback } from 'pressto';
import { StyleProp, ViewStyle } from 'react-native';

export interface ColorPickerButtonProps {
  onPress?: (options: AnimatedPressableOptions) => void;
  style: StyleProp<ViewStyle>;
  selected?: boolean;
}

export function ColorPickerButton({
  onPress,
  selected,
  style
}: ColorPickerButtonProps) {
  return (
    <PressableWithoutFeedback>
      <Palette />
    </PressableWithoutFeedback>
  );
}
