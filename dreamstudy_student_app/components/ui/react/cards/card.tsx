import { View, type ViewProps } from 'react-native';

import { UnistylesValues } from 'react-native-unistyles';

export type CardProps = ViewProps & UnistylesValues;

export function Card({ style: styleProp, ...otherProps }: CardProps) {
  return <View style={[styleProp]} {...otherProps} />;
}
