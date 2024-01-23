interface NavigationLinkInfo {
  id: string;
  text: string;
  href: string;
  icon?: React.JSX.Element;
  subLinks?: NavigationLinkInfo[];
}
