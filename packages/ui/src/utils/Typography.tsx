import { TypographyProps } from "./_types"
export const Typography = ({
  as: Tag = 'span',
  font,
  color = 'black',
  size = 'text-base', // size really would be like: title span text etc...
  weight = 'normal',
  className,
  children,
}: TypographyProps) => {
  return (
    <Tag
      className={`font-${weight} text-${color} ${size} ${font ? `font-${font}` : ''} ${className ?? ''}`}
    >
      {children}
    </Tag>
  );
};