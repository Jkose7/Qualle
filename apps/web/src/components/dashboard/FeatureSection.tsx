import { CardNotebook } from "@qualle/ui"
import { FeatureSectionProps } from "./_types"


export function FeatureSection({ title }: FeatureSectionProps) {
  return (
    <section className="flex flex-col gap-2 sm:gap-4">
      <h1 className="text-md sm:text-xl text-light font-merriweather font-extrabold">{title}</h1>
      <CardNotebook></CardNotebook>
    </section>
  )
}