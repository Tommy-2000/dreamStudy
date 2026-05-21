import { Trash } from 'lucide-react-native';
import { AnimatedPressableOptions, PressableWithoutFeedback } from 'pressto';
import { StyleProp, ViewStyle } from 'react-native';

export interface DeleteButtonProps {
  onPress?: (options: AnimatedPressableOptions) => void;
  style: StyleProp<ViewStyle>;
  selected?: boolean;
}

export function DeleteButton() {
  return (
    <PressableWithoutFeedback>
      <Trash />
    </PressableWithoutFeedback>
  );
}
