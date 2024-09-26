import { CardNew } from "@qualle/ui"
import { FeatureSectionProps } from "./_types"


export function FeatureSection({ title }: FeatureSectionProps) {
  return (
    <section>
      <h1 className="text-md sm:text-xl text-darke font-merriweather font-extrabold">{title}</h1>
      <article>
        <CardNew></CardNew>
      </article>
    </section>
  )
}