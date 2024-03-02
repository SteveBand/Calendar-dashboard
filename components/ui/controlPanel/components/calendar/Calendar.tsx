import { useMemo, useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import moment from "moment";
import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks";
import { setActiveDay } from "@/lib/redux/features/date-slice";

export function Calendar() {
  const [date, setDate] = useState<Date>(new Date());
  const dateNow = new Date();
  const activeDay = useAppSelector((state) =>
    state.dateSlice.activeDay ? new Date(state.dateSlice.activeDay) : null
  );
  const dispatch = useAppDispatch();

  const { currentYear, currentMonth } = {
    currentYear: date.getFullYear(),
    currentMonth: date.getMonth(),
  };

  const dateObj = useMemo(() => {
    const firstMonthDay = new Date(
      date.getFullYear(),
      date.getMonth()
    ).getDay();

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
        return beforeDate;
      } else if (day > daysInMonth) {
        const year = currentMonth === 11 ? currentYear + 1 : currentYear;
        const month = currentMonth === 11 ? 0 : currentMonth + 1;
        const afterDate = new Date(year, month, day - daysInMonth);
        return afterDate;
      } else {
        return new Date(currentYear, currentMonth, day);
      }
    });

    return daysArray;
  }, [date]);

  const weekDays = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

  function handleForward(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    const newDate = new Date(date);
    if (currentMonth === 11) {
      newDate.setMonth(0);
      newDate.setFullYear(currentYear + 1);
    } else {
      newDate.setMonth(currentMonth + 1);
    }
    setDate(newDate);
  }

  function handleBackward(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    const newDate = new Date(date);
    if (currentMonth === 0) {
      newDate.setMonth(11);
      newDate.setFullYear(currentYear - 1);
    } else {
      newDate.setMonth(currentMonth - 1);
    }
    setDate(newDate);
  }

  function onDayClick(index: number, day: Date) {
    const newDay = new Date(day);
    newDay.setHours(12, 0, 0, 0);
    console.log(newDay);
    setDate(day);
    dispatch(setActiveDay(newDay.getTime()));
  }

  function compareObjects(day: Date, activeDay: Date | null) {
    if (!activeDay) return false;
    day.setHours(12, 0, 0, 0);
    if (day.getTime() === activeDay.getTime()) {
      return true;
    } else {
      return false;
    }
  }

  return (
    <article className="calendar-wrapper">
      <header>
        <h4>{moment(date).format("MMMM YYYY")}</h4>
        <div>
          <button onClick={handleBackward}>
            <FaAngleLeft />
          </button>
          <button onClick={handleForward}>
            <FaAngleRight />
          </button>
        </div>
      </header>
      <div className="weekdays">
        {weekDays.map((i) => {
          return <h5 key={i}>{i}</h5>;
        })}
      </div>
      <div className="days">
        {dateObj.map((day, index) => {
          return (
            <button
              className={`${
                day.getDate() === dateNow.getDate() &&
                day.getMonth() === dateNow.getMonth()
                  ? "today"
                  : ""
              } ${compareObjects(day, activeDay) ? "active" : ""}`}
              key={index}
              onClick={() => onDayClick(index, day)}
            >
              <p>{day.getDate()}</p>
            </button>
          );
        })}
      </div>
    </article>
  );
}
