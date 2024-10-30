import { Typography } from "./Typography"
export const Flag = ({ name }: { name: string }) => {
  return <Typography
    as='span'
    font='taviraj'
    color='white'
    size="xs"
    className="bg-purple rounded p-1"
  >
    {name}
  </Typography>
}