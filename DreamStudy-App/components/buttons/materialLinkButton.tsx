import { MaterialButtonProps } from '@/utils/types/buttonProps';
import { Link, LinkProps } from 'expo-router';
import { MaterialButton } from './materialButton';

interface MaterialLinkButtonProps extends MaterialButtonProps {
  href: LinkProps['href'];
}

export default function MaterialLinkButton({
  href,
  title,
  accessibilityHint
}: MaterialLinkButtonProps) {
  return (
    <Link href={href} asChild>
      <MaterialButton title={title} accessibilityHint={accessibilityHint} />
    </Link>
  );
}
