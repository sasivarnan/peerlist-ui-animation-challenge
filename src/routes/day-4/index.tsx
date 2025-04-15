import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";

import Tabs from "@/components/day-4/Tabs";
import type { TabItem } from "@/components/day-4/Tabs";

import styles from "./day-4.module.css";

export const Route = createFileRoute("/day-4/")({
  component: RouteComponent,
});

const tabs: TabItem[] = [
  { id: "free", content: "Free" },
  {
    id: "premium",
    content: "Premium",
    children: [
      { id: "monthly", content: "Monthly" },
      { id: "annually", content: "Annually" },
    ],
  },
];

function RouteComponent() {
  const [active, setActive] = useState(tabs[0].id);

  const handleTabChange = (id: string) => setActive(id);

  return (
    <div className="page-container">
      <Tabs
        tabs={tabs}
        active={active}
        onTabChange={handleTabChange}
        className={styles["tab-panel"]}
      />
    </div>
  );
}
