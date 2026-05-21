import { Teacher } from '@/utils/types/zod/models';
import { memo, PropsWithChildren } from 'react';
import { Card } from './card';
import { TextCard } from './textCard';

export type TeacherCardProps = {
  teacher: Teacher;
} & PropsWithChildren;

const TeacherCard = memo(({ teacher, ...otherProps }: TeacherCardProps) => {
  return (
    <Card>
      <TextCard>{teacher.teacherFirstName}</TextCard>
      <TextCard>{teacher.teacherLastName}</TextCard>
      <TextCard>{teacher.teachingYear}</TextCard>
      <TextCard>{teacher.revisionLevel}</TextCard>
      <TextCard>{teacher.revisionSubject}</TextCard>
    </Card>
  );
});
