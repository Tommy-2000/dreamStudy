import { Platform } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';

export const Fonts = Platform.select({
  ios: {
    /** iOS `UIFontDescriptorSystemDesignDefault` */
    sans: 'system-ui',
    /** iOS `UIFontDescriptorSystemDesignSerif` */
    serif: 'ui-serif',
    /** iOS `UIFontDescriptorSystemDesignRounded` */
    rounded: 'ui-rounded',
    /** iOS `UIFontDescriptorSystemDesignMonospaced` */
    mono: 'ui-monospace'
  },
  default: {
    sans: 'normal',
    serif: 'serif',
    rounded: 'normal',
    mono: 'monospace'
  },
  web: {
    sans: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    serif: "Georgia, 'Times New Roman', serif",
    rounded:
      "'SF Pro Rounded', 'Hiragino Maru Gothic ProN', Meiryo, 'MS PGothic', sans-serif",
    mono: "SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace"
  }
});

export const textStyles = StyleSheet.create((theme, rt) => ({
  textType: {
    variants: {
      type: {
        default: {
          fontSize: 16,
          lineHeight: 24,
          fontFamily: Fonts.sans
        },
        defaultSemiBold: {
          fontSize: 16,
          lineHeight: 24,
          fontWeight: '600',
          fontFamily: Fonts.sans
        },
        title: {
          fontSize: 32,
          fontWeight: 'bold',
          lineHeight: 32,
          fontFamily: Fonts.sans
        },
        subtitle: {
          fontSize: 20,
          fontWeight: 'bold',
          fontFamily: Fonts.sans
        },
        link: {
          lineHeight: 30,
          fontSize: 16,
          color: '#0a7ea4',
          fontFamily: Fonts.sans
        }
      }
    }
  },

  textColor: {
    color: theme.colors.typography
  }
}));
