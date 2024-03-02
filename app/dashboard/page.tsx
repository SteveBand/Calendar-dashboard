import { ControlPanel } from "@/components/ui/controlPanel/ControlPanel";
import { Mainview } from "@/components/dashboard-page/Mainview";

export default function Dashboard() {
  return (
    <section className="dashboard-wrapper">
      <ControlPanel />
      <Mainview />
    </section>
  );
}
