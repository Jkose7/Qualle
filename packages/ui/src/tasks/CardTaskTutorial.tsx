import { Gradient } from "../utils/Gradient"
import { TutorialFlag } from "../utils/TutorialFlag"

export const CardTaskTutorial = () => {
  return (
    <article className="flex bg-dark-gray h-16 w-full rounded-lg">
      <div className="h-full w-2/5 relative bg-transparent">
        <Gradient />
      </div>
      <div className="self-end w-3/5 py-2 px-2 flex flex-col">
        <p className="self-end text-base text-balance text-white">¡Anota tus pendientes!</p>
        <div className="self-end">
          <TutorialFlag />
        </div>
      </div>
    </article>
  )
}