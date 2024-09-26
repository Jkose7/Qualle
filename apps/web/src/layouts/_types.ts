export interface CommonLayoutProps {
  children: React.ReactNode;
  footer?: boolean;
  header?: boolean;
}

export interface LayoutDashboardProps extends CommonLayoutProps {
  title: string;
}