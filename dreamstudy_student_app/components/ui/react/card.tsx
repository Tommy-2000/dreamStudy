import { CardProps } from '@/utils/types/react/uiTypes';
import { View } from 'react-native';


export function Card({
  style: styleProp,
  accessible,
  accessibilityRole,
  accessibilityLabel,
  accessibilityLiveRegion,
  ...otherProps
}: CardProps) {
  return (
    <View
      accessible={accessible} // If a Card component is used in the background, it is not accessible
      accessibilityRole={accessibilityRole} // If a Card component is clickable, this must be a button
      accessibilityLabel={accessibilityLabel}
      accessibilityLiveRegion={accessibilityLiveRegion} // Should be assertive by default to ensure accessibilty
      aria-label="Card"
      aria-live="assertive"
      aria-pressed={false}
      style={[styleProp]}
      {...otherProps}
    />
  );
}
