import { buttonStyles, calendarTheme } from '@/utils/appStyles';
import {
  Calendar,
  useCalendar,
  type CalendarProps
} from '@marceloterreiro/flash-calendar';
import { memo, useMemo } from 'react';
import { MaterialIconButton } from '../buttons/materialIconButton';
import { Card } from '../card';
import { TextCard } from '../cards/textCard';

export interface StudentCalendarProps extends CalendarProps {
  onPastMonthPress: () => void;
  onNextMonthPress: () => void;
}

export const StudentCalendar = memo((calendarProps: StudentCalendarProps) => {
  const { calendarRowMonth, weekDaysList, weeksList } =
    useCalendar(calendarProps);

  const today = useMemo(() => {
    return weeksList.flatMap(week => week).find(day => day.isToday);
  }, [weeksList]);

  return (
    <Card>
      <Calendar.VStack>
        <Calendar.HStack
          alignItems="center"
          justifyContent="space-around"
          width="100%">
          <MaterialIconButton
            iconName="arrow-left"
            onPress={() => {}}
            accessibilityHint="Arrow Left"
            style={buttonStyles.iconButton}
          />
          <TextCard>{calendarRowMonth}</TextCard>
          <MaterialIconButton
            iconName="arrow-right"
            onPress={() => {}}
            accessibilityHint="Arrow Right"
            style={buttonStyles.iconButton}
          />
        </Calendar.HStack>

        <Calendar.Row.Week spacing={4}>
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
                dayHeight={25}
                daySpacing={4}
                isStartOfWeek={day.isStartOfWeek}
                key={i}>
                <Calendar.Item.Day
                  height={25}
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
