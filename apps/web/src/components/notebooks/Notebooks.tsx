import { Typography } from "@qualle/ui/src/utils/Typography";
import { NotebooksWelcome } from "./NotebooksWelcome";

export function Notebooks() {
  return (
    <div>
      <Typography
        as='h1'
        font='taviraj'
        weight="extrabold"
        color='black'
        size="text-xl"
      >
        Notebooks
      </Typography>
      <NotebooksWelcome />
    </div>
  )
}