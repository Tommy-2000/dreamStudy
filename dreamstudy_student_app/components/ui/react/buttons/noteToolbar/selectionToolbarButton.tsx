import { SquareDashed } from 'lucide-react-native';
import { AnimatedPressableOptions, PressableWithoutFeedback } from 'pressto';
import { StyleProp, ViewStyle } from 'react-native';

export interface SelectionButtonProps {
  onPress?: (options: AnimatedPressableOptions) => void;
  style: StyleProp<ViewStyle>;
  selected?: boolean;
}

export function SelectionButton() {
  return (
    <PressableWithoutFeedback>
      <SquareDashed />
    </PressableWithoutFeedback>
  );
}
