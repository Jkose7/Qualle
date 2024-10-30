import { TypographyProps } from "./_types"
export const Typography = ({
  as: Tag = 'span',
  font,
  color = 'black',
  size = 'base',
  weight = 'normal',
  className,
  children,
}: TypographyProps) => {
  return (
    <Tag
      className={`
        text-${color} 
        text-${size} 
        font-${weight} 
        ${font ? `font-${font}` : ''} 
        ${className ?? ''}
      `}
    >
      {children}
    </Tag>
  );
};