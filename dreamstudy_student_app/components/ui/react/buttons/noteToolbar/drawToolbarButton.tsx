import { PenLine } from 'lucide-react-native';
import { AnimatedPressableOptions, PressableWithoutFeedback } from 'pressto';
import { StyleProp, ViewStyle } from 'react-native';
import { Card } from '../../card';

export interface DrawButtonProps {
  onPress?: (options: AnimatedPressableOptions) => void;
  style: StyleProp<ViewStyle>;
  selected?: boolean;
}

export function DrawButton({ onPress, selected, style }: DrawButtonProps) {
  return (
    <Card style={style}>
      <PressableWithoutFeedback onPress={onPress}>
        <PenLine />
      </PressableWithoutFeedback>
    </Card>
  );
}
