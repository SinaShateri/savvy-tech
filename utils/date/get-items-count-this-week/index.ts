export function getItemsCountThisWeek<T extends { createdAt: string }>(
  items: T[]
): number {
  const today = new Date();

  // Calculate start (Sunday) and end (Saturday) of the current week
  const startOfWeek = new Date(today);
  startOfWeek.setDate(today.getDate() - today.getDay());
  startOfWeek.setHours(0, 0, 0, 0);

  const endOfWeek = new Date(today);
  endOfWeek.setDate(today.getDate() - today.getDay() + 6);
  endOfWeek.setHours(23, 59, 59, 999);

  // Filter items created within the current week
  const filteredItems = items.filter((item) => {
    const createdAt = new Date(item.createdAt);
    return createdAt >= startOfWeek && createdAt <= endOfWeek;
  });

  return filteredItems.length;
}
