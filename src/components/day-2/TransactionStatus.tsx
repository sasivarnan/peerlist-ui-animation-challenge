import { useEffect } from "react";
import { useAnimate } from "motion/react";

import styles from "./TransactionStatus.module.css";

const TransactionStatusEnum = {
  LOADING: "LOADING",
  SUCCESS: "SUCCESS",
  WARNING: "WARNING",
} as const;

type Props = {
  icon: React.ComponentType<{ className?: string }>;
  text: string;
  variant: (typeof TransactionStatusEnum)[keyof typeof TransactionStatusEnum];
};

const TransactionStatus = (props: Props) => {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    switch (props.variant) {
      case TransactionStatusEnum.WARNING:
        animate(scope.current, {
          backgroundColor: "#FFE4E2",
          color: "#FF3E40",
        }).then(() => {
          animate(
            "svg",
            // @ts-ignore
            {
              translateX: [-3, 0, 3, 0],
            },
            { repeat: 2, duration: 0.1 }
          );
        });
        break;

      case TransactionStatusEnum.SUCCESS:
        animate([
          [
            scope.current,
            {
              backgroundColor: "#DCF5DF",
              color: "#32C957",
            },
          ],
        ]).then(() => {
          animate(
            "svg",
            // @ts-ignore
            {
              translateY: [-3, 0, 3, 0],
            },
            { repeat: 2, duration: 0.1 }
          );
        });
        break;

      case TransactionStatusEnum.LOADING:
        animate(scope.current, {
          backgroundColor: "#E8F4FF",
          color: "#53AFFF",
        }).then(() => {
          animate(
            "svg",
            {
              rotate: 360,
            },
            {
              repeat: Infinity,
            }
          );
        });
        break;
    }

    return () => {};
  }, [props.variant]);

  return (
    <div ref={scope} className={styles.root}>
      <props.icon className={styles.icon} />
      <div>{props.text}</div>
    </div>
  );
};

export { TransactionStatusEnum };

export default TransactionStatus;
