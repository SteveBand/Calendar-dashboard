import { Dispatch, useMemo, useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

export function Calendar() {
  const dateNow = new Date();
  const [date, setDate] = useState<DateState>({
    day: dateNow.getDate(),
    month: dateNow.getMonth(),
    year: dateNow.getFullYear(),
  });
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const dateObj = useMemo(() => {
    const newDate = new Date(date.year, date.month, 0);
    const firstMonthDay = new Date(
      newDate.getFullYear(),
      newDate.getMonth() + 1,
      1
    ).getDay();
    const daysInMonth = new Date(date.year, date.month + 1, 0).getDate();
    const rows = Math.ceil((firstMonthDay + daysInMonth) / 7) * 7;
    const daysArray = Array.from({ length: rows }).map((_, index) => {
      const day = index - firstMonthDay + 1;
      if (day > 0 && day <= daysInMonth) {
        return day;
      }
    });

    return daysArray;
  }, [date]);

  const weekDays = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

  function handleForward(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    if (date.month === 12) {
      setDate((prev) => {
        return { ...prev, month: 1 };
      });
      setDate((prev) => {
        return { ...prev, year: prev.year++ };
      });
    }
    setDate((prev) => {
      return { ...prev, month: prev.month++ };
    });
  }

  function handleBackward(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    if (date.month === 1) {
      setDate((prev) => {
        return { ...prev, month: 13 };
      });
      setDate((prev) => {
        return { ...prev, year: prev.year-- };
      });
    }
    setDate((prev) => {
      return { ...prev, month: prev.month-- };
    });
  }

  function onDayClick(index: number, day: number) {
    setActiveIndex(index);
    console.log(new Date(date.year, date.month, day + 1).toISOString());
  }

  return (
    <article className="calendar-wrapper">
      <header>
        <h4>
          {date.month} {date.year}
        </h4>
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
          return typeof day === "number" ? (
            <button
              className={`${
                date.month === dateNow.getMonth() && day === dateNow.getDate()
                  ? "today"
                  : ""
              } ${activeIndex === index ? "active" : ""}`}
              key={index}
              onClick={() => onDayClick(index, day)}
            >
              <p>{day}</p>
            </button>
          ) : (
            <button disabled key={index}></button>
          );
        })}
      </div>
    </article>
  );
}

type DateState = {
  day: number;
  month: number;
  year: number;
};
