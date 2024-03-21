"use client";
import { MainviewDates } from "../ui/mainView/MainviewDates";
import { MainviewHeader } from "../ui/mainView/MainviewHeader";
import { MainviewHours } from "../ui/mainView/MainviewHours";

export function Mainview() {
  return (
    <section className="mainview-wrapper">
      <MainviewHeader />
      <MainviewDates />
      <MainviewHours />
    </section>
  );
}
