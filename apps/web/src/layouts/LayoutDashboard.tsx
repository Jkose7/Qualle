import { useEffect } from "react"
import { LayoutDashboardProps } from "./_types"
import { Header } from "@qualle/ui"

export function LayoutDashboard({ children, title }: LayoutDashboardProps) {
  useEffect(() => {
    document.title = title
  }, [])

  return (
    <main className="flex flex-col gap-2 sm:gap-4 md:gap-8 mx-4 sm:mx-16 md:mx-32 xl:mx-52">
      <Header />
      {children}
    </main>
  )
}