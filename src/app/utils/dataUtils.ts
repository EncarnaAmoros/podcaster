export const havePassed24hours = (accessed: string): boolean => {
  const date = new Date(accessed);
  const now = new Date();
  const diff = now.getTime() - date.getTime();
  const diffHours = diff / (1000 * 60 * 60);
  return diffHours > 24;
};

export const formatDateString = (date: string): string => {
  const dateObj = new Date(date);
  return dateObj.toLocaleDateString();
};

export const formatDuration = (duration: number): string => {
  const date = new Date(duration);
  return date.toISOString().slice(11, 19);
};
