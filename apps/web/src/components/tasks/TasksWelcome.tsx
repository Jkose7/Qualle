import { CardTaskNew, CardTaskTutorial } from "@qualle/ui";

export function TaskWelcome() {
  return (
    <article className="flex flex-col gap-6">
      <CardTaskTutorial />
      <CardTaskNew />
    </article>
  )
}