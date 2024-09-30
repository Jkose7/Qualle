import { CardNotebook, CardNotebookNew, CardTask } from "@qualle/ui"
import { FeatureSectionRenderProps } from "./_types"

export function FeatureSectionRender({ type }: FeatureSectionRenderProps) {
  console.log(type)
  const CardRender = () => {
    if (type === 'cuadernos') {
      return <CardNotebook />
    }
  }
  return (
    <section className="flex gap-6">
      <CardRender />
    </section>
  )
}