import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

import moment from "moment";
import { setActiveDay } from "@/lib/redux/features/date-slice";

export function MainviewHeader() {
  const activeDay = useAppSelector((state) => state.dateSlice.activeDay);
  const dispatch = useAppDispatch();

  function changeDay(e: React.MouseEvent<SVGAElement>) {
    const currentDate = new Date(activeDay);
    if (e.currentTarget.getAttribute("data-action") === "forward") {
      currentDate.setDate(currentDate.getDate() + 1);
    } else {
      currentDate.setDate(currentDate.getDate() - 1);
    }
    dispatch(setActiveDay(currentDate.getTime()));
  }

  return (
    <header className="mainview-header">
      <h2>{moment(activeDay).format("MMMM, YYYY")}</h2>
      <ul className="options">
        <li>Month</li>
        <li>Week</li>
        <li>Day</li>
      </ul>
      <ul className="day-option">
        <li>
          <FaChevronLeft data-action="backwards" onClick={changeDay} />
        </li>
        <li>Today</li>
        <li>
          <FaChevronRight data-action="forward" onClick={changeDay} />
        </li>
      </ul>
    </header>
  );
}
