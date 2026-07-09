import { Card } from '@/components/card';
import ParallaxScrollCard from '@/components/parallaxScrollCard';
import { SkiaGradientRenderer } from '@/components/skiaGradientRenderer';
import { TextCard } from '@/components/textCard';
import { appStore } from '@/state/appStores';
import { journeyScreenStyles } from '@/utils/appStyles';
import {
    CalendarOnDayPress,
    fromDateId,
    toDateId
} from '@marceloterreiro/flash-calendar';
import { add, sub } from 'date-fns';
import { FiberProvider } from 'its-fine';
import { useCallback, useState } from 'react';
import { Provider } from 'react-redux';
import { CalendarCard } from '../components/journey/calendarCard';

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
    // Wrap the root of each screen with FibreProvider to allow for context
    //  to be shared between Skia components that are rendered on the screen
    // Provider is for Redux state and FibreProvider is for Skia context sharing
    <Provider store={appStore}>
      <FiberProvider>
        <ParallaxScrollCard
          headerBackgroundColor={{}}
          headerBackground={<SkiaGradientRenderer />}>
          <Card style={journeyScreenStyles.titleContainer}>
            <TextCard type="title">Journey</TextCard>
          </Card>
          <TextCard>
            This app includes example code to help you get started.
          </TextCard>
          <TextCard type="title">Calendar</TextCard>
          <Card>
            <CalendarCard
              calendarMonthId={toDateId(currentCalendarMonth)}
              onPastMonthPress={handlePastMonthPress}
              onNextMonthPress={handleNextMonthPress}
              onCalendarDayPress={handleDayPickerPress}
            />
          </Card>
        </ParallaxScrollCard>
      </FiberProvider>
    </Provider>
  );
}
