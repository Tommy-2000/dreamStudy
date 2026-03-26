import { cardStyles } from '@/utils/appStyles';
import { RevisionContent } from '@/utils/types/zod/models';
import { memo, PropsWithChildren } from 'react';
import Sortable from 'react-native-sortables';
import { Card } from './card';
import { TextCard } from './textCard';

export type RevisionCardProps = {
  data: RevisionContent;
  onTap: () => void;
} & PropsWithChildren;

export const RevisionCard = memo(
  ({ data, onTap, ...otherProps }: RevisionCardProps) => {
    return (
      <Card style={cardStyles.revision}>
        <TextCard>{data.revisionTitle}</TextCard>
        <TextCard>{data.revisionLevel}</TextCard>
        <TextCard>{data.revisionSubject}</TextCard>
        <TextCard>{data.teachingYear}</TextCard>
        <TextCard>{data.revisionAuthor.teacherFirstName}</TextCard>
        <Sortable.Touchable onTap={onTap}>
          <TextCard>Start Revision</TextCard>
        </Sortable.Touchable>
      </Card>
    );
  }
);
