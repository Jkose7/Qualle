import { FeatureSection } from "../components/dashboard/FeatureSection";
import { LayoutDashboard } from "../layouts/LayoutDashboard";
import features from "../data/features/features.json"

export function PageDashboard() {
  return (
    <LayoutDashboard title="Dashboard">
      {
        features.map(({ name, inDashboard }) => (
          inDashboard && (
            <FeatureSection title={name} type={name} key={name} />
          )
        ))
      }
    </LayoutDashboard>
  )
}