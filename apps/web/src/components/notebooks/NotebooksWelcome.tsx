import { CardNotebookNew, CardNotebookTutorial } from "@qualle/ui";

export function NotebooksWelcome() {
  return (
    <article className="flex gap-6">
      <CardNotebookTutorial />
      <CardNotebookNew />
    </article>
  )
}