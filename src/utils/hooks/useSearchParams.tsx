import { usePathname, useRouter, useSearchParams as useNextSearchParams } from 'next/navigation';

export const useSearchParams = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useNextSearchParams();

  const getQuery = (urlSearchParams: URLSearchParams, key: string, value: string | string[]) => {
    let query = '';

    if (!value.length) {
      urlSearchParams.delete(key);

      const search = urlSearchParams.toString();
      query = search ? `?${search}` : '';
    } else if (!Array.isArray(value)) {
      urlSearchParams.set(key, value);

      const search = urlSearchParams.toString();
      query = search ? `?${search}` : '';
    } else {
      urlSearchParams.delete(key);

      value.forEach((currentValue) => urlSearchParams.append(key, currentValue));

      const search = urlSearchParams.toString();
      query = search ? `?${search}` : '';
    }

    return query;
  };

  const setSearchParam = (key: string, value: string | string[]) => {
    const urlSearchParams = new URLSearchParams(searchParams);

    const query = getQuery(urlSearchParams, key, value);

    router.push(`${pathname}${query}`);
  };

  const setSearchParams = (params: { key: string; value: string | string[] }[]) => {
    const urlSearchParams = new URLSearchParams(searchParams);

    const query = params.reduce(
      (_, param) => getQuery(urlSearchParams, param.key, param.value),
      ''
    );

    router.push(`${pathname}${query}`);
  };

  return { searchParams, setSearchParam, setSearchParams };
};
