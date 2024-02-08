import { usePathname, useRouter, useSearchParams as useNextSearchParams } from 'next/navigation';

export const useSearchParams = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useNextSearchParams();

  const setSearchParam = (key: string, value: string | string[]) => {
    const current = new URLSearchParams(searchParams);

    if (!value.length) {
      current.delete(key);
      const search = current.toString();
      const query = search ? `?${search}` : '';
      router.push(`${pathname}${query}`);
      return;
    }

    if (!Array.isArray(value)) {
      current.set(key, value);

      const search = current.toString();
      const query = search ? `?${search}` : '';
      router.push(`${pathname}${query}`);
    } else {
      current.delete(key);

      value.forEach((currentValue) => current.append(key, currentValue));

      const search = current.toString();
      const query = search ? `?${search}` : '';
      router.push(`${pathname}${query}`);
    }
  };

  return { searchParams, setSearchParam };
};
