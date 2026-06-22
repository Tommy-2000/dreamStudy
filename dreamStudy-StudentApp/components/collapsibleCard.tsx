import { PropsWithChildren, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { StyleSheet, useUnistyles } from 'react-native-unistyles';

import { Card } from '@/components/card';
import { IconSymbol } from '@/components/iconSymbol';
import { TextCard } from '@/components/textCard';

export function CollapsibleCard({
  children,
  title
}: PropsWithChildren & { title: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const { theme } = useUnistyles();

  return (
    <Card>
      <TouchableOpacity
        style={styles.heading}
        onPress={() => setIsOpen(value => !value)}
        activeOpacity={0.8}>
        <IconSymbol
          name="chevron.right"
          size={18}
          weight="medium"
          color={theme.colors.accents.apple}
          style={{ transform: [{ rotate: isOpen ? '90deg' : '0deg' }] }}
        />

        <TextCard type="defaultSemiBold">{title}</TextCard>
      </TouchableOpacity>
      {isOpen && <Card style={styles.content}>{children}</Card>}
    </Card>
  );
}

const styles = StyleSheet.create({
  heading: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6
  },
  content: {
    marginTop: 6,
    marginLeft: 24
  }
});
