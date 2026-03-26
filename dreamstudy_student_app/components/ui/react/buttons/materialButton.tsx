import { GestureResponderEvent, TouchableOpacity } from 'react-native';
import { Card } from '../cards/card';
import { TextCard } from '../cards/textCard';

export interface MaterialButtonProps {
  onPress: ((event: GestureResponderEvent) => void) | undefined;
  style: {};
  title: string;
}

export function MaterialButton({ onPress, style, title }: MaterialButtonProps) {
  return (
    <TouchableOpacity onPress={onPress} style={style}>
      <Card>
        <TextCard>{title}</TextCard>
      </Card>
    </TouchableOpacity>
  );
}
