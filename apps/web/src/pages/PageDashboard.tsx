import { FeatureSection } from "../components/dashboard/FeatureSection";
import { LayoutDashboard } from "../layouts/LayoutDashboard";
import features from "../data/features/features.json"

export function PageDashboard() {
  return (
    <LayoutDashboard title="Dashboard">
      {
        features.map(({ name, inDashboard }) => (
          inDashboard && (
            <FeatureSection title={name} key={name}>
              <h1 className="bg-purple">{name}</h1>
            </FeatureSection>
          )
        ))
      }
    </LayoutDashboard>
  )
}