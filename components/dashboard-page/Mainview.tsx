"use client";
import { MainviewDates } from "../ui/mainView/MainviewDates";
import { MainviewHeader } from "../ui/mainView/MainviewHeader";

export function Mainview() {
  return (
    <section className="mainview-wrapper">
      <MainviewHeader />
      <MainviewDates />
    </section>
  );
}
