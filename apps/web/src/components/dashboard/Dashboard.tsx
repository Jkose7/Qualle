import { Notebooks } from "../notebooks/Notebooks";

export function Dashboard() {
  return (
    <section className="flex flex-col gap-2 sm:gap-4">  
      <Notebooks></Notebooks>
    </section>
  )
}