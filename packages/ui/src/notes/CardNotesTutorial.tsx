import { Gradient } from "../utils/Gradient"
import { Flag } from "../utils/Flag"
export const CardNotesTutorial = () => {
  return (
    <article className="flex flex-col bg-dark-gray h-44 w-40 rounded-lg">
      <div className="h-3/6 w-full relative bg-transparent">
        <Gradient />
      </div>
      <div className="h-3/6 w-full px-2 py-1">
        <p className="text-base text-balance text-white">¡Dibuja y anota!</p>
        <Flag name="Tutorial"/>
      </div>
    </article>
  )
}