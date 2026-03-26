import Animated from 'react-native-reanimated';
import { StyleSheet } from 'react-native-unistyles';

export function HelloWave() {
  return (
    <Animated.Text
      style={animatedStyles.helloWaveAnimation}>
      👋
    </Animated.Text>
  );
}


const animatedStyles = StyleSheet.create({
  helloWaveAnimation: {
    fontSize: 28,
    lineHeight: 32,
    marginTop: -6,
    animationName: {
      '50%': { transform: [{ rotate: '25deg' }] },
    },
    animationIterationCount: 4,
    animationDuration: '300ms',
  }
});


