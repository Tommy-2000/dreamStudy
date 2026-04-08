import { AccessibilityInfo } from 'react-native';
import { appLogger } from '../appLogger';

export const checkScreenReader = async (): Promise<boolean> => {
  const screenReaderIsEnabled = await AccessibilityInfo.isScreenReaderEnabled();
  appLogger.debug('Screen Reader is set to ' + screenReaderIsEnabled);
  return screenReaderIsEnabled;
};

