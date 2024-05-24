type SearchParams = { [key: string]: string | string[] | undefined };
type CITY =
  | 'NOVOSIBIRSK'
  | 'TOMSK'
  | 'KRASNOYARSK'
  | 'OMSK'
  | 'KEMEROVO'
  | 'NOVOKUZNETSK'
  | 'MEZHDURECHENSK';

type $TSFIXME = any;
type RequiredFields<T, K extends keyof T> = T & Required<Pick<T, K>>;
