import { ControlPanel } from "@/components/ui/ControlPanel";
import { Mainview } from "@/components/ui/dashboard-page/Mainview";

export default function Dashboard() {
  return (
    <section className="dashboard-wrapper">
      <ControlPanel />
      <Mainview />
    </section>
  );
}
