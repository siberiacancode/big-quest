import { getPageCount } from './getPageCount';

export const getPaginationNumbers = ({ count, current, limit }: PaginationResponse) => {
  const pageCount = getPageCount(limit, count);
  const paginationNumbers: number[] = [];

  for (let page = Math.max(1, current - 2); page <= Math.min(pageCount, current + 2); page += 1) {
    paginationNumbers.push(page);
  }

  return paginationNumbers;
};
