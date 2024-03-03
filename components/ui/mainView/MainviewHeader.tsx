import { useAppSelector } from "@/lib/redux/hooks";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

import moment from "moment";

export function MainviewHeader() {
  const activeDay = useAppSelector((state) => state.dateSlice.activeDay);
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
          <FaChevronLeft />
        </li>
        <li>Today</li>
        <li>
          <FaChevronRight />
        </li>
      </ul>
    </header>
  );
}
