import { TutorialFlag } from "./utils/TutorialFlag"

export const CardNotebook = () => {
  return (
    <article className="flex flex-col bg-dark-gray h-44 w-40 rounded-lg">
      <div className="h-3/6 w-full relative bg-transparent">
        <div
          className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_2px,transparent_2px),linear-gradient(to_bottom,#4f4f4f2e_2px,transparent_2px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_90%_90%_at_50%_0%,#000_70%,transparent_110%)]"
        >
        </div>
      </div>
      <div className="h-3/6 w-full px-2 py-1">
        <p className="text-base text-balance text-white">¡Crea tu primer cuaderno!</p>
        <TutorialFlag />
      </div>
    </article>
  )
}