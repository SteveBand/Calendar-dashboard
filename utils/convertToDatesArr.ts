export function convertToDatesArr(activeDay: Date | number) {
  const date = new Date(activeDay);
  const { currentMonth, currentYear } = {
    currentMonth: date.getMonth(),
    currentYear: date.getFullYear(),
  };
  const firstMonthDay = new Date(date.getFullYear(), date.getMonth()).getDay();
  const daysInMonth = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDate();
  const rows = Math.ceil((firstMonthDay + daysInMonth) / 7) * 7;
  const daysArray = Array.from({ length: rows }).map((_, index) => {
    const day = index - firstMonthDay + 1;
    if (day <= 0) {
      const year = currentMonth === 0 ? currentYear - 1 : currentYear;
      const month = currentMonth === 0 ? 11 : currentMonth;
      const beforeDate = new Date(year, month, day);
      beforeDate.setHours(12, 0, 0, 0);
      return beforeDate.getTime();
    } else if (day > daysInMonth) {
      const year = currentMonth === 11 ? currentYear + 1 : currentYear;
      const month = currentMonth === 11 ? 0 : currentMonth + 1;
      const afterDate = new Date(year, month, day - daysInMonth);
      afterDate.setHours(12, 0, 0, 0);
      return afterDate.getTime();
    } else {
      const currentDate = new Date(currentYear, currentMonth, day);
      currentDate.setHours(12, 0, 0, 0);
      return currentDate.getTime();
    }
  });
  return daysArray;
}
