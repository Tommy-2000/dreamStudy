import { View, type ViewProps } from 'react-native';

import { UnistylesValues } from 'react-native-unistyles';

export type CardProps = ViewProps & UnistylesValues;

export function Card({
  style: styleProp,
  accessible,
  accessibilityRole,
  accessibilityLabel,
  ...otherProps
}: CardProps) {
  return (
    <View
      accessible={accessible}
      accessibilityRole={accessibilityRole}
      accessibilityLabel={accessibilityLabel}
      style={[styleProp]}
      {...otherProps}
    />
  );
}
