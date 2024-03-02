"use client";

import { useState } from "react";
import { ControlPanelHeader } from "./components/ControlPanelHeader";
import { Calendar } from "./components/calendar/Calendar";

export function ControlPanel() {
  const [date, setDate] = useState<Date>(new Date());
  const [activeDay, setActiveDay] = useState<Date | null>(null);
  return (
    <section className="control-panel-wrapper">
      <ControlPanelHeader />
      <Calendar
        date={date}
        setDate={setDate}
        activeDay={activeDay}
        setActiveDay={setActiveDay}
      />
    </section>
  );
}
