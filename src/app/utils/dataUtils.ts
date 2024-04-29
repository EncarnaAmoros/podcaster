export const havePassed24hours = (accessed: string): boolean => {
  const date = new Date(accessed);
  const now = new Date();
  const diff = now.getTime() - date.getTime();
  const diffHours = diff / (1000 * 60 * 60);
  return diffHours > 24;
};
