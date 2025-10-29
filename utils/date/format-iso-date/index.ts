const formatISODate = (isoString: string): string => {
  const date = new Date(isoString);

  // Define formatting options
  const options: Intl.DateTimeFormatOptions = {
    month: 'short', // Jan, Feb, Mar...
    day: '2-digit', // 01, 02...
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  };

  return date.toLocaleString('en-US', options);
};

export default formatISODate;
