import { Gradient } from "./utils/Gradient"
import { TutorialFlag } from "./utils/TutorialFlag"

export const CardTask = () => {
  return (
    <article className="flex bg-dark-gray h-44 w-40 rounded-lg">
      <div className="h-3/6 w-full relative bg-transparent">
        <Gradient />
      </div>
      <div className="h-3/6 w-full px-2 py-1">
        <p className="text-base text-balance text-white">¡Crea tu primera tarea!</p>
        <TutorialFlag />
      </div>
    </article>
  )
}