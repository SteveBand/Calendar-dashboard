"use client";

import { ControlPanelHeader } from "./components/ControlPanelHeader";
import Calendar from "react-calendar";
export function ControlPanel() {
  function formatWeekDays(locale: string | undefined, date: Date) {
    return date.toLocaleDateString(locale, { weekday: "short" }).slice(0, 2);
  }

  return (
    <section className="control-panel-wrapper">
      <ControlPanelHeader />
      <Calendar
        prev2Label={null}
        next2Label={null}
        showNeighboringCentury={false}
        showNeighboringDecade={false}
        formatWeekday={formatWeekDays}
        view="month"
      />
    </section>
  );
}
