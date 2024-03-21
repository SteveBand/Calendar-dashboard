import { useEffect, useMemo, useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import moment from "moment";
import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks";
import { setActiveDay, setDaysArr } from "@/lib/redux/features/date-slice";

export function Calendar() {
  const activeDay = useAppSelector((state) => state.dateSlice.activeDay);
  const date = new Date(activeDay);
  const datesArr = useAppSelector((state) => state.dateSlice.daysArr);
  const dispatch = useAppDispatch();

  const { currentYear, currentMonth } = {
    currentYear: date.getFullYear(),
    currentMonth: date.getMonth(),
  };

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
    dispatch(setActiveDay(newDate.getTime()));
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
    dispatch(setActiveDay(newDate.getTime()));
  }

  function onDayClick(index: number, day: Date) {
    day.setHours(12, 0, 0, 0);
    dispatch(setActiveDay(day.getTime()));
  }

  function compareObjects(day: Date) {
    if (!activeDay) return false;
    day.setHours(12, 0, 0, 0);
    if (day.getTime() === activeDay) {
      return true;
    } else {
      return false;
    }
  }

  useEffect(() => {
    dispatch(setDaysArr(activeDay));
  }, [activeDay]);

  return (
    <article className="calendar-wrapper">
      <header>
        <h4>{moment(activeDay).format("MMMM YYYY")}</h4>
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
        {datesArr.map((el, index) => {
          const day = new Date(el);
          return (
            <button
              className={`${
                day.getDate() === day.getDate() &&
                day.getMonth() === day.getMonth()
                  ? "today"
                  : ""
              } ${compareObjects(day) ? "active" : ""}`}
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
