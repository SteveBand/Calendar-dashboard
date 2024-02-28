"use client";

import { ControlPanelHeader } from "./components/ControlPanelHeader";
import { Calendar } from "./components/calendar/Calendar";

export function ControlPanel() {
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
