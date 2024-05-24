export const formatDate = (date: Date) => {
  const day = String(new Date(date).getDate()).padStart(2, '0');
  const month = String(new Date(date).getMonth() + 1).padStart(2, '0');
  const year = String(new Date(date).getFullYear()).slice(-2);
  return `${day}.${month}.${year}`;
};

export const groupTimesByDate = (data: FreeTime[]) => {
  const groupedData = data.reduce(
    (acc, item) => {
      const formattedDate = formatDate(item.date);
      if (!acc[formattedDate]) {
        acc[formattedDate] = [];
      }
      acc[formattedDate].push(item.time);
      return acc;
    },
    {} as Record<string, string[]>
  );

  return Object.entries(groupedData).map(([date, times]) => ({ date, times }));
};
