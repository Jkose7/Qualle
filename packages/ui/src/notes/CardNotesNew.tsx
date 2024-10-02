import { Gradient } from "../utils/Gradient"

export const CardNotesNew = () => {
  return (
    <article className="flex flex-col bg-light-gray h-44 w-40 rounded-lg">
      <div className="h-3/6 w-full relative bg-transparent">
        <Gradient />
      </div>
      <div className="h-3/6 w-full px-2 py-1">
      </div>
    </article>
  )
}