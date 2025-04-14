import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";

import TransactionStatus, {
  TransactionStatusEnum,
} from "@/components/day-2/TransactionStatus";

import LoadingIcon from "@/components/day-2/icons/circle-notch-solid.svg?react";
import SuccessIcon from "@/components/day-2/icons/circle-check-solid.svg?react";
import WarningIcon from "@/components/day-2/icons/triangle-exclamation-solid.svg?react";

import styles from "./day-2.module.css";

export const Route = createFileRoute("/day-2/")({
  component: RouteComponent,
});

const VARIANTS = [
  {
    icon: motion.create(LoadingIcon),
    text: "Analyzing Transaction",
    variant: TransactionStatusEnum.LOADING,
  },
  {
    icon: motion.create(SuccessIcon),
    text: "Transaction Safe",
    variant: TransactionStatusEnum.SUCCESS,
  },
  {
    icon: motion.create(WarningIcon),
    text: "Transaction Warning",
    variant: TransactionStatusEnum.WARNING,
  },
];

function RouteComponent() {
  const [activeStatus, setActiveStatus] = useState(VARIANTS[0]);

  return (
    <div className="page-container">
      <TransactionStatus
        icon={activeStatus.icon}
        text={activeStatus.text}
        variant={activeStatus.variant}
      />

      <div className={styles["button-container"]}>
        <button type="button" onClick={() => setActiveStatus(VARIANTS[0])}>
          Loading
        </button>
        <button type="button" onClick={() => setActiveStatus(VARIANTS[1])}>
          Success
        </button>
        <button type="button" onClick={() => setActiveStatus(VARIANTS[2])}>
          Error
        </button>
      </div>
    </div>
  );
}
