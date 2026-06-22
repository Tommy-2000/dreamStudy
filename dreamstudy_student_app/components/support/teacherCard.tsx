import { Teacher } from '@/api/models';
import { Card } from '@/components/card';
import { TextCard } from '@/components/textCard';
import { memo, PropsWithChildren } from 'react';

export type TeacherCardProps = {
  data: Teacher;
} & PropsWithChildren;

const TeacherCard = memo(({ data, ...otherProps }: TeacherCardProps) => {
  return (
    <Card>
      <TextCard>{data.teacherFirstName}</TextCard>
      <TextCard>{data.teacherLastName}</TextCard>
      <TextCard>{data.teachingYear}</TextCard>
      <TextCard>{data.revisionLevel}</TextCard>
      <TextCard>{data.revisionSubject}</TextCard>
    </Card>
  );
});
