import { CardProps } from '@/utils/types/uiProps';
import { AnimatedPressableOptions, PressableWithoutFeedback } from 'pressto';
import { Card } from './card';

export type TouchableCardProps = {
  onPress: ((event: AnimatedPressableOptions) => void) | undefined;
} & CardProps;

export function TouchableCard({ onPress, ...otherProps }: TouchableCardProps) {
  return (
    <PressableWithoutFeedback onPress={onPress}>
      <Card {...otherProps} />
    </PressableWithoutFeedback>
  );
}
