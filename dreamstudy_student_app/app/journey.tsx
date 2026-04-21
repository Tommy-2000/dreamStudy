import { Image } from 'expo-image';

import { Card } from '@/components/ui/react/card';
import { CollapsibleCard } from '@/components/ui/react/cards/collapsibleCard';
import ParallaxScrollCard from '@/components/ui/react/cards/parallaxScrollCard';
import { TextCard } from '@/components/ui/react/cards/textCard';
import { ExternalLinkCard } from '@/components/ui/react/externalLink';
import { IconSymbol } from '@/components/ui/react/iconSymbol';
import { StudentCalendar } from '@/components/ui/react/studentCalendar/studentCalendar';
import { journeyScreenStyles } from '@/utils/appStyles';
import {
  CalendarOnDayPress,
  fromDateId,
  toDateId
} from '@marceloterreiro/flash-calendar';
import { add, sub } from 'date-fns';
import { useCallback, useState } from 'react';

export default function JourneyScreen() {
  const [currentCalendarMonth, setCurrentCalendarMonth] = useState(new Date());

  const [selectedDate, setSelectedDate] = useState<Date>(
    sub(new Date(), { days: 1 })
  );

  const [isCalendarPickerVisible, setIsCalendarPickerVisible] = useState(true);

  const handlePastMonthPress = useCallback(() => {
    setCurrentCalendarMonth(sub(currentCalendarMonth, { months: 1 }));
  }, [currentCalendarMonth]);

  const handleNextMonthPress = useCallback(() => {
    setCurrentCalendarMonth(add(currentCalendarMonth, { months: 1 }));
  }, [currentCalendarMonth]);

  const handleDayPickerPress = useCallback<CalendarOnDayPress>(dateId => {
    setCurrentCalendarMonth(fromDateId(dateId));
    setSelectedDate(fromDateId(dateId));
    setIsCalendarPickerVisible(true);
    return;
  }, []);

  return (
    <ParallaxScrollCard
      headerBackgroundColor={{}}
      headerImage={
        <IconSymbol
          size={310}
          color="#808080"
          name="chevron.left.forwardslash.chevron.right"
          style={journeyScreenStyles.headerImage}
        />
      }>
      <Card style={journeyScreenStyles.titleContainer}>
        <TextCard type="title">Journey</TextCard>
      </Card>
      <TextCard>
        This app includes example code to help you get started.
      </TextCard>
      <CollapsibleCard title="File-based routing">
        <TextCard>
          This app has two screens:{' '}
          <TextCard type="defaultSemiBold">app/(tabs)/index.tsx</TextCard> and{' '}
          <TextCard type="defaultSemiBold">app/(tabs)/explore.tsx</TextCard>
        </TextCard>
        <TextCard>
          The layout file in{' '}
          <TextCard type="defaultSemiBold">app/(tabs)/_layout.tsx</TextCard>{' '}
          sets up the tab navigator.
        </TextCard>
        <ExternalLinkCard href="https://docs.expo.dev/router/introduction">
          <TextCard type="link">Learn more</TextCard>
        </ExternalLinkCard>
      </CollapsibleCard>
      <CollapsibleCard title="Android, iOS, and web support">
        <TextCard>
          You can open this project on Android, iOS, and the web. To open the
          web version, press <TextCard type="defaultSemiBold">w</TextCard> in
          the terminal running this project.
        </TextCard>
      </CollapsibleCard>
      <CollapsibleCard title="Images">
        <TextCard>
          For static images, you can use the{' '}
          <TextCard type="defaultSemiBold">@2x</TextCard> and{' '}
          <TextCard type="defaultSemiBold">@3x</TextCard> suffixes to provide
          files for different screen densities
        </TextCard>
        <Image
          source={require('@/assets/images/react-logo.png')}
          style={{ width: 100, height: 100, alignSelf: 'center' }}
        />
        <ExternalLinkCard href="https://reactnative.dev/docs/images">
          <TextCard type="link">Learn more</TextCard>
        </ExternalLinkCard>
      </CollapsibleCard>
      <Card>
        <StudentCalendar
          calendarMonthId={toDateId(currentCalendarMonth)}
          onPastMonthPress={handlePastMonthPress}
          onNextMonthPress={handleNextMonthPress}
          onCalendarDayPress={handleDayPickerPress}
        />
      </Card>
    </ParallaxScrollCard>
  );
}
