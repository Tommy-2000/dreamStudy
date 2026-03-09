import { Card } from '@/components/ui/react/cards/card';
import ParallaxScrollCard from '@/components/ui/react/cards/parallax_scroll_card';
import { TextCard } from '@/components/ui/react/cards/text_card';
import { IconSymbol } from '@/components/ui/react/icon-symbol';
import { studyScreenStyles } from '@/styles/screen_styles';

const studyMockData = [
  {
    studyId: 'a452145',
    studyLevel: 'GCSE',
    studyModule: 'English Literature'
  },
  {
    studyId: 'b957342',
    studyLevel: 'GCSE',
    studyModule: 'Mathematics'
  },
  {
    studyId: 'c750021',
    studyLevel: 'A Level',
    studyModule: 'Psychology'
  },
  {
    studyId: 'd302751',
    studyLevel: 'A Level',
    studyModule: 'Computer Science'
  }
];

const studyMockDataString = [
  'GCSE English Literature',
  'GCSE Mathematics',
  'A Level Psychology',
  'A Level Computer Science'
];

export default function StudyScreen() {
  return (
    <ParallaxScrollCard
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={
        <IconSymbol
          size={310}
          color="#808080"
          name="chevron.left.forwardslash.chevron.right"
          style={studyScreenStyles.headerImage}
        />
      }>
      <Card style={studyScreenStyles.titleContainer}>
        <TextCard type="title">Study</TextCard>
      </Card>
      <TextCard>
        This app includes example code to help you get started.
      </TextCard>
      <Card>
        {/* <FlashScrollCard
          data={studyMockDataString}
          numColumns={2}
          initialScrollIndex={10}
        /> */}
      </Card>
    </ParallaxScrollCard>
  );
}
