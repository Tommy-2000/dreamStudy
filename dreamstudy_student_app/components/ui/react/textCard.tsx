import { Text } from 'react-native';

import { textStyles } from '@/utils/appStyles';
import { TextCardProps } from '@/utils/types/react/uiTypes';
import { memo } from 'react';

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
