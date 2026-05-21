import { buttonStyles, calendarTheme, cardStyles } from '@/utils/appStyles';
import {
  Calendar,
  useCalendar,
  type CalendarProps as FlashCalendarProps
} from '@marceloterreiro/flash-calendar';
import { memo, useMemo } from 'react';
import { MaterialIconButton } from '../buttons/materialIconButton';
import { Card } from '../card';
import { TextCard } from '../textCard';

export interface CalendarCardProps extends FlashCalendarProps {
  onPastMonthPress: () => void;
  onNextMonthPress: () => void;
}

const ICON_SIZE = 20;
const DAY_HEIGHT = 75;
export const CalendarCard = memo((calendarProps: CalendarCardProps) => {
  const { calendarRowMonth, weekDaysList, weeksList } =
    useCalendar(calendarProps);

  const today = useMemo(() => {
    return weeksList.flatMap(week => week).find(day => day.isToday);
  }, [weeksList]);

  return (
    <Card style={cardStyles.calendarContainer}>
      <Calendar.VStack>
        <Calendar.HStack
          alignItems="center"
          justifyContent="space-around"
          width="100%">
          <MaterialIconButton
            iconName="arrow-left"
            iconSize={ICON_SIZE}
            onPress={() => {}}
            accessibilityHint="Arrow Left"
            style={buttonStyles.iconButton}
          />
          <TextCard>{calendarRowMonth}</TextCard>
          <MaterialIconButton
            iconName="arrow-right"
            iconSize={ICON_SIZE}
            onPress={() => {}}
            accessibilityHint="Arrow Right"
            style={buttonStyles.iconButton}
          />
        </Calendar.HStack>

        <Calendar.Row.Week spacing={16}>
          {weekDaysList.map((day, i) => (
            <Calendar.Item.WeekName
              height={25}
              key={i}
              theme={calendarProps.theme?.itemWeekName}>
              {day}
            </Calendar.Item.WeekName>
          ))}
        </Calendar.Row.Week>

        {weeksList.map((week, i) => (
          <Calendar.Row.Week key={i}>
            {week.map((day, i) => (
              <Calendar.Item.Day.Container
                dayHeight={DAY_HEIGHT}
                daySpacing={16}
                isStartOfWeek={day.isStartOfWeek}
                key={i}>
                <Calendar.Item.Day
                  height={DAY_HEIGHT}
                  metadata={day}
                  onPress={calendarProps.onCalendarDayPress}
                  theme={calendarTheme.itemDay}>
                  {day.displayLabel}
                </Calendar.Item.Day>
              </Calendar.Item.Day.Container>
            ))}
          </Calendar.Row.Week>
        ))}
      </Calendar.VStack>
    </Card>
  );
});
