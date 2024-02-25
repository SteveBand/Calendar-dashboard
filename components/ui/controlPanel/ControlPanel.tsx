"use client";

import { useMemo } from "react";
import { ControlPanelHeader } from "./components/ControlPanelHeader";
import { Calendar } from "./components/Calendar";

export function ControlPanel() {
  const dateNow = new Date().getMonth();
  // const DatesObj = useMemo(() => {
  //   let arr: any = [];
  //   for (let i = 0; i < 12; i++) {
  //     const newDate = new Date(2024, i + 1, 0);
  //     const newArr = [];

  //     for (let y = 1; y <= newDate.getDate(); y++) {
  //       newArr.push(y);
  //     }

  //     const month = newDate.toLocaleString("default", { month: "short" }); // Get month name
  //     const dateObj = {
  //       name: month,
  //       days: [newArr],
  //     };

  //     arr = [...arr, dateObj];
  //   }
  //   return arr;
  // }, []);

  return (
    <section className="control-panel-wrapper">
      <ControlPanelHeader />
      {/* <Calendar
        prev2Label={null}
        next2Label={null}
        showNeighboringCentury={false}
        showNeighboringDecade={false}
        view="month"
      /> */}
      <Calendar />
    </section>
  );
}
