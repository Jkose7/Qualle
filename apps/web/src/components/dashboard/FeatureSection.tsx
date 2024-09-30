import { FeatureSectionProps } from "./_types"
import { FeatureSectionRender } from "./FeatureSectionRender"

export function FeatureSection({ title, type }: FeatureSectionProps) {

  return (
    <section className="flex flex-col gap-2 sm:gap-4">
      <h1 className="text-md sm:text-xl text-light font-merriweather font-extrabold">{title}</h1>
      <FeatureSectionRender type={type}/>
    </section>
  )
}