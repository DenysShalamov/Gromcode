const getDiff = (startDate, endDate) => {
  const utc1 = Date.UTC(
    startDate.getFullYear(),
    startDate.getMonth(),
    startDate.getDate(),
    startDate.getHours(),
    startDate.getMinutes(),
    startDate.getSeconds(),
  );
  const utc2 = Date.UTC(
    endDate.getFullYear(),
    endDate.getMonth(),
    endDate.getDate(),
    endDate.getHours(),
    endDate.getMinutes(),
    endDate.getSeconds(),
  );
  const duration = Math.abs(Math.floor(utc2 - utc1));
  const days = parseInt(duration / (1000 * 60 * 60 * 24), 10);
  const hours = parseInt((duration / (1000 * 60 * 60)) % 24, 10);
  const minutes = parseInt((duration / (1000 * 60)) % 60, 10);
  const seconds = parseInt((duration / 1000) % 60, 10);
  return `${days}d ${hours}h ${minutes}m ${seconds}s`;
};
