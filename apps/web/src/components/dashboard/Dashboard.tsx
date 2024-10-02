import { Notebooks } from "../notebooks/Notebooks";
import { Notes } from "../notes/Notes";
import { Task } from "../tasks/Tasks";

export function Dashboard() {
  return (
    <section className="flex flex-col gap-2 sm:gap-4">
      <Notebooks></Notebooks>
      <Task></Task>
      <Notes></Notes>
    </section>
  )
}