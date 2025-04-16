import { motion } from "motion/react";
import type { Collectibles } from "@/types/Collectibles";

import styles from "./Views.module.css";

const ListView = (props: { data: Collectibles[] }) => {
  return (
    <div className={styles["list-view"]}>
      {props.data.map((item) => (
        <div key={item.id} className={styles["list-item"]}>
          <motion.img
            layoutId={`collection-item-image-${item.id}`}
            src={item.image}
            className={styles["image"]}
          />
          <div>
            <motion.div
              layoutId={`collection-item-title-${item.id}`}
              className={styles["item-title"]}
            >
              {item.title}
            </motion.div>
            <motion.div
              layoutId={`collection-item-price-${item.id}`}
              className={styles["item-info-container"]}
            >
              <span className={styles["item-price"]}>{item.price}</span>{" "}
              <span className={styles["item-currency"]}>{item.currency}</span>
            </motion.div>
          </div>
          <motion.div
            className={styles["item-amount"]}
            layoutId={`collection-item-amount-${item.id}`}
          >
            #{item.amount}
          </motion.div>
        </div>
      ))}
    </div>
  );
};

export default ListView;
