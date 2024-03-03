"use client";
import { setActiveDay } from "@/lib/redux/features/date-slice";
import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks";
import moment from "moment";
import { useEffect, useRef, useState } from "react";
import { MdOutlineCalendarMonth } from "react-icons/md";

export function MainviewDates() {
  const activeDay = useAppSelector((state) => state.dateSlice.activeDay);
  const datesArr = useAppSelector((state) => state.dateSlice.daysArr);
  const mainViewDatesWidth = useRef<HTMLDivElement | null>(null);
  const [newArr, setNewArr] = useState<number[] | Date[]>([]);
  const dispatch = useAppDispatch();

  useEffect(() => {
    function updatedArray() {
      if (mainViewDatesWidth.current) {
        const numberOfDates = Math.floor(
          mainViewDatesWidth.current.offsetWidth / 118
        );
        const currentDateIndex = datesArr.findIndex((el) => {
          return el === activeDay;
        });
        const arr = datesArr.slice(
          currentDateIndex <= 1 ? currentDateIndex - 1 : currentDateIndex - 2,
          currentDateIndex + Math.floor(numberOfDates - 2)
        );
        setNewArr(arr);
      }
    }
    updatedArray();
    window.addEventListener("resize", updatedArray);

    return () => window.removeEventListener("resize", updatedArray);
  }, [datesArr, activeDay]);

  return (
    <section className="mainview-dates">
      <MdOutlineCalendarMonth />
      <article className="days-list" ref={mainViewDatesWidth}>
        {newArr.map((el, index) => {
          return (
            <div
              key={index}
              className={`${activeDay === el ? "active" : ""}`}
              onClick={() => dispatch(setActiveDay(el))}
            >
              <p>{moment(el).format("dddd")}</p>
              <p>{moment(el).format("D")}</p>
            </div>
          );
        })}
      </article>
    </section>
  );
}
