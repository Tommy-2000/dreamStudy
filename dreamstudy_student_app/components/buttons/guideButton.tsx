import { buttonStyles } from '@/utils/appStyles';
import Octicons from '@expo/vector-icons/Octicons';
import { createAnimatedPressable } from 'pressto';
import { Card } from '../card';

const PressableRipple = createAnimatedPressable(progress => {
  'worklet';
  return {
    transform: [{ skewY: `${progress * 10}deg` }]
  };
});

export function GuideButton() {
  return (
    <PressableRipple style={buttonStyles.guideButton}>
      <Card>
        <Octicons name="question" size={50} />
      </Card>
    </PressableRipple>
  );
}
