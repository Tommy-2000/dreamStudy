import { Text, type TextProps } from 'react-native';

import { textStyles } from '@/utils/appStyles';
import { memo } from 'react';
import { UnistylesVariants } from 'react-native-unistyles';

export type TextCardProps = TextProps & UnistylesVariants<typeof textStyles>;

// Test should be rendered once
export const TextCard = memo(
  ({ style: styleProp, type, ...rest }: TextCardProps) => {
    textStyles.useVariants({ type });

    return (
      <Text
        style={[textStyles.textColor, textStyles.textType, styleProp]}
        {...rest}
      />
    );
  }
);
