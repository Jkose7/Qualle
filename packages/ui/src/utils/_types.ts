export type TypographyProps = {
  as?: 'span' | 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'strong' | 'em' | 'div';
  font?: string;
  color?: string;
  size?: string;
  weight?: string;
  className?: string;
  children: React.ReactNode;
};