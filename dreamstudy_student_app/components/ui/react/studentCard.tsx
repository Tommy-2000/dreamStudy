import { Student } from '@/utils/types/zod/models';
import { memo, PropsWithChildren } from 'react';
import { Card } from './card';
import { TextCard } from './textCard';

export type StudentCardProps = {
  student: Student;
} & PropsWithChildren;

const StudentCard = memo(({ student, ...otherProps }: StudentCardProps) => {
  return (
    <Card>
      <TextCard>{student.studentFirstName}</TextCard>
      <TextCard>{student.studentLastName}</TextCard>
      <TextCard>{student.studentYear}</TextCard>
      <TextCard>{student.revisionLevel}</TextCard>
      <TextCard>{student.supportType}</TextCard>
    </Card>
  );
});
