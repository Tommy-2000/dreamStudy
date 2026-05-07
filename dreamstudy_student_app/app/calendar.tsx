import { CalendarCard } from '@/components/ui/react/calendar/calendarCard';
import { Card } from '@/components/ui/react/card';
import { CollapsibleCard } from '@/components/ui/react/cards/collapsibleCard';
import ScrollCard from '@/components/ui/react/cards/scrollCard';
import { TextCard } from '@/components/ui/react/cards/textCard';
import { ExternalLinkCard } from '@/components/ui/react/externalLink';
import { Fonts } from '@/utils/appStyles';
import {
  CalendarOnDayPress,
  fromDateId,
  toDateId
} from '@marceloterreiro/flash-calendar';
import { add, sub } from 'date-fns';
import { useCallback, useState } from 'react';

export default function CalendarScreen() {
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
    <ScrollCard>
      <TextCard type="title">Calendar</TextCard>
      <Card>
        <CalendarCard
          calendarMonthId={toDateId(currentCalendarMonth)}
          onPastMonthPress={handlePastMonthPress}
          onNextMonthPress={handleNextMonthPress}
          onCalendarDayPress={handleDayPickerPress}
        />
      </Card>
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
        <ExternalLinkCard href="https://reactnative.dev/docs/images">
          <TextCard type="link">Learn more</TextCard>
        </ExternalLinkCard>
      </CollapsibleCard>
      <CollapsibleCard title="Light and dark mode components">
        <TextCard>
          This template has light and dark mode support. The{' '}
          <TextCard type="defaultSemiBold">useColorScheme()</TextCard> hook lets
          you inspect what the user&apos;s current color scheme is, and so you
          can adjust UI colors accordingly.
        </TextCard>
        <ExternalLinkCard href="https://docs.expo.dev/develop/user-interface/color-themes/">
          <TextCard type="link">Learn more</TextCard>
        </ExternalLinkCard>
      </CollapsibleCard>
      <CollapsibleCard title="Animations">
        <TextCard>
          This template includes an example of an animated component. The{' '}
          <TextCard type="defaultSemiBold">components/HelloWave.tsx</TextCard>{' '}
          component uses the powerful{' '}
          <TextCard type="defaultSemiBold" style={{ fontFamily: Fonts.mono }}>
            react-native-reanimated
          </TextCard>{' '}
          library to create a waving hand animation.
        </TextCard>
      </CollapsibleCard>
    </ScrollCard>
  );
}
