import { useMemo } from "react";
import { motion } from "motion/react";
import type { Collectibles } from "@/types/Collectibles";

import styles from "./Views.module.css";

const PackView = (props: { data: Collectibles[] }) => {
  const count = useMemo(
    () =>
      props.data.reduce((val, item) => {
        return val + item.price;
      }, 0),
    [props.data]
  );

  return (
    <div className={styles["pack-view"]}>
      {props.data.map((item, index) => (
        <div key={item.id} className={styles["pack-item"]}>
          <motion.img
            layoutId={`collection-item-image-${item.id}`}
            src={item.image}
            className={styles["image"]}
            initial={{ rotate: index % 2 ? -12 : 12 }}
          />
        </div>
      ))}
      <motion.div
        initial={{ translateY: "100%", opacity: 0 }}
        animate={{ translateY: 0, opacity: 1 }}
        className={styles["pack-view-info"]}
      >
        <div>{props.data.length} Collectibles</div>
        <div>
          <span className={styles["item-price"]}>{count}</span>{" "}
          <span className={styles["item-currency"]}>ETH</span>
        </div>
      </motion.div>
    </div>
  );
};

export default PackView;
