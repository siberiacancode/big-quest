interface NavigationLinkInfo {
  text: LocaleMessageId;
  href: string;
  icon?: React.JSX.Element;
  subLinks?: NavigationLinkInfo[];
}
