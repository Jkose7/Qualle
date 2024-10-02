import { Dashboard } from "../components/dashboard/Dashboard";
import { LayoutDashboard } from "../layouts/LayoutDashboard";

export function PageDashboard() {
  return (
    <LayoutDashboard title="Dashboard">
      <Dashboard />
    </LayoutDashboard>
  )
}