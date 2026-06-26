import { RevisionContent } from '@/api/models';
import { Card } from '@/components/card';
import { TextCard } from '@/components/textCard';
import { cardStyles } from '@/utils/appStyles';
import { PressableScale } from 'pressto';
import { memo, PropsWithChildren } from 'react';

export type RevisionCardProps = {
  data: RevisionContent;
  onPress: () => void;
} & PropsWithChildren;

export const RevisionCard = memo(
  ({ data, onPress, ...otherProps }: RevisionCardProps) => {
    return (
      <Card style={cardStyles.revisionCard}>
        <TextCard>{data.revisionTitle}</TextCard>
        <TextCard>{data.revisionLevel}</TextCard>
        <TextCard>{data.revisionSubject}</TextCard>
        <TextCard>{data.teachingYear}</TextCard>
        <TextCard>{data.revisionAuthor}</TextCard>
        <PressableScale onPress={onPress}>
          <TextCard>Start Revision</TextCard>
        </PressableScale>
      </Card>
    );
  }
);
