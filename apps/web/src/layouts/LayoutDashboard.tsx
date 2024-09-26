import { useEffect } from "react"
import { LayoutDashboardProps } from "./_types"

export function LayoutDashboard({ children, title }: LayoutDashboardProps) {
  useEffect(() => {
    document.title = title
  }, [])

  return (
    <main className="flex flex-col gap-2 sm:gap-4 md:gap-8 mx-2 sm:mx-16 md:mx-32 xl:mx-52">
      {children}
    </main>
  )
}