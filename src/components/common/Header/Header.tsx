import { HeaderSearch } from './components/HeaderSearch/HeaderSearch';
import { NotificationSwitcher } from './components/NotificationSwitcher/NotificationSwitcher';
import { ProfileDropdownMenu } from './components/ProfileDropdownMenu/ProfileDropdownMenu';
import { ThemeSwitcher } from './components/ThemeSwitcher/ThemeSwitcher';

export const Header = () => (
  <header className='flex h-20 w-full items-center justify-between bg-background pl-8 pr-14'>
    <HeaderSearch />

    <div className='flex items-center gap-4'>
      <ThemeSwitcher />
      <NotificationSwitcher />

      <div className='h-12 w-px bg-secondary lgx:h-px lgx:w-full' />
      <ProfileDropdownMenu />
    </div>
  </header>
);
