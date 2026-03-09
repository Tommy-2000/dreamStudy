import { Text, type TextProps } from 'react-native';

import { textStyles } from '@/styles/text_styles';
import { UnistylesVariants } from 'react-native-unistyles';
import { Card } from './card';

export type TextCardProps = TextProps & UnistylesVariants<typeof textStyles>;

export function TextCard({ style: styleProp, type, ...rest }: TextCardProps) {
  textStyles.useVariants({ type });

  return (
    <Card>
      <Text
        style={[textStyles.textColor, textStyles.textType, styleProp]}
        {...rest}
      />
    </Card>
  );
}
