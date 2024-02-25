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
    const newArr = [];

    for (let y = 1; y <= newDate.getDate(); y++) {
      newArr.push(y);
    }

    const month = newDate.toLocaleString("default", { month: "short" });
    const obj = {
      name: month,
      days: [newArr],
    };

    return obj;
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

  return (
    <article className="calendar-wrapper">
      <header>
        <h4>
          {dateObj.name} {date.year}
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
        {dateObj.days[0].map((day, index) => {
          return (
            <button
              className={`${
                date.month === dateNow.getMonth() && day === dateNow.getDate()
                  ? "today"
                  : ""
              } ${activeIndex === index ? "active" : ""}`}
              key={day}
              onClick={() => setActiveIndex(index)}
            >
              <p>{day}</p>
            </button>
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
