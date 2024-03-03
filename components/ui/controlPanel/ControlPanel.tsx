"use client";

import { ControlPanelHeader } from "./components/ControlPanelHeader";
import { Calendar } from "./components/calendar/Calendar";

export function ControlPanel() {
  return (
    <section className="control-panel-wrapper">
      <ControlPanelHeader />
      <Calendar />
    </section>
  );
}
