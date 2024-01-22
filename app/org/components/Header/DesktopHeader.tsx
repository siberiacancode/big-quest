import { HeaderSearch } from './components/HeaderSearch/HeaderSearch';
import { NotificationsDropdownMenu } from './components/NotificationsDropdownMenu/NotificationsDropdownMenu';
import { ProfileDropdownMenu } from './components/ProfileDropdownMenu/ProfileDropdownMenu';
import { ThemeSwitcher } from './components/ThemeSwitcher/ThemeSwitcher';

export const DesktopHeader = () => (
  <header className='flex h-20 w-full items-center justify-between bg-background pl-8 pr-14'>
    <HeaderSearch />

    <div className='flex items-center gap-4'>
      <ThemeSwitcher />
      <NotificationsDropdownMenu />

      <div className='h-12 w-px bg-secondary lgx:h-px lgx:w-full' />
      <ProfileDropdownMenu />
    </div>
  </header>
);
