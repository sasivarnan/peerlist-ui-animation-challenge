import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import clsx from "clsx";

import Pills, { type PillData } from "@/components/day-5/Pills/index";
import ListView from "@/components/day-5/views/ListView";
import CardView from "@/components/day-5/views/CardView";
import PackView from "@/components/day-5/views/PackView";

import type { Collectibles } from "@/types/Collectibles";

import ListViewIcon from "@/components/day-5/images/list-view.svg?react";
import CardViewIcon from "@/components/day-5/images/card-view.svg?react";
import PackViewIcon from "@/components/day-5/images/pack-view.svg?react";
import SkilledFingersImage from "@/components/day-5/images/skilled-fingers-image.svg";
import VibrantVibesImage from "@/components/day-5/images/vibrant-vibes-image.svg";

import styles from "./day-5.module.css";

export const Route = createFileRoute("/day-5/")({
  component: RouteComponent,
});

const pills: PillData[] = [
  {
    id: "list",
    label: "List View",
    icon: ListViewIcon,
  },
  {
    id: "card",
    label: "Card View",
    icon: CardViewIcon,
  },
  {
    id: "pack",
    label: "Pack View",
    icon: PackViewIcon,
  },
];

const collectibles: Collectibles[] = [
  {
    id: 1,
    image: SkilledFingersImage,
    title: "Skilled Fingers Series",
    price: 0.855,
    currency: "ETH",
    amount: 209,
  },
  {
    id: 2,
    image: VibrantVibesImage,
    title: "Vibrant Vibes Series",
    price: 0.209,
    currency: "ETH",
    amount: 808,
  },
];

function RouteComponent() {
  const [active, setActive] = useState(pills[0].id);

  return (
    <div className={clsx("page-container", styles["page-container"])}>
      <div className={styles["collectibles-container"]}>
        <div>Collectibles</div>
        <div></div>
        <div className={styles["pill-container"]}>
          {pills.map((pill) => (
            <Pills
              key={pill.id}
              active={pill.id === active}
              onClick={setActive}
              data={pill}
            />
          ))}
        </div>
        <hr></hr>

        <div>{active === pills[0].id && <ListView data={collectibles} />}</div>
        <div>{active === pills[1].id && <CardView data={collectibles} />}</div>
        <div>{active === pills[2].id && <PackView data={collectibles} />}</div>
      </div>
    </div>
  );
}
