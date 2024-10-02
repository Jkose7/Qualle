import { CardNotesNew, CardNotesTutorial } from "@qualle/ui";

export function NotesWelcome() {
  return (
    <div className="flex gap-6">
      <CardNotesTutorial />
      <CardNotesNew />
    </div>
  )
}