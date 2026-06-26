import { Student } from '@/api/models';
import { Card } from '@/components/card';
import { TextCard } from '@/components/textCard';
import { cardStyles } from '@/utils/appStyles';
import { PressableScale } from 'pressto';
import { memo, PropsWithChildren } from 'react';

export type StudentUserCardProps = {
  data: Student;
  onPress: () => void;
} & PropsWithChildren;

export const StudentUserCard = memo(
  ({ data, onPress, ...otherProps }: StudentUserCardProps) => {
    return (
      <Card style={cardStyles.studentUserCard}>
        <TextCard>{data.id}</TextCard>
        <TextCard>{data.studentFirstName}</TextCard>
        <TextCard>{data.studentLastName}</TextCard>
        <TextCard>{data.studentYear}</TextCard>
        <TextCard>{data.revisionLevel}</TextCard>
        <TextCard>{data.supportType}</TextCard>
        <PressableScale onPress={onPress}>
          <TextCard>See More</TextCard>
        </PressableScale>
      </Card>
    );
  }
);
