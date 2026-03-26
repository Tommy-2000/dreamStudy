import { GestureResponderEvent, TouchableOpacity } from 'react-native';
import { Card, CardProps } from './card';

export type TouchableCardProps = {
  onPress: ((event: GestureResponderEvent) => void) | undefined;
} & CardProps;

export function TouchableCard({ onPress, ...otherProps }: TouchableCardProps) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Card {...otherProps} />
    </TouchableOpacity>
  );
}
