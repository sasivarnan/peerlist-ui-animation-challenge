import { AnimatePresence, motion } from "motion/react";
import clsx from "clsx";

import SquareIcon from "./icons/square-regular.svg?react";
import SquareCheckedIcon from "./icons/square-check-solid.svg?react";

import styles from "./Checkbox.module.css";

const AnimatedSquareIcon = motion.create(SquareIcon);
const AnimatedSquareCheckedIcon = motion.create(SquareCheckedIcon);

const Checkbox = (props: React.ComponentProps<"input">) => {
  return (
    <div className={styles.root}>
      <input
        type="checkbox"
        className={styles.checkbox}
        onChange={props.onChange}
        aria-label={props.children?.toString()}
        checked={props.checked}
      ></input>
      <AnimatePresence>
        {props.checked ? (
          <AnimatedSquareCheckedIcon
            className={clsx(styles.icon, styles["icon-checked"])}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
          />
        ) : (
          <AnimatedSquareIcon
            className={styles.icon}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
          />
        )}
      </AnimatePresence>
      <div className={styles.label}>
        <AnimatePresence>
          {props.checked ? (
            <motion.div
              className={styles["label-checked-line"]}
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              exit={{ width: 0 }}
            ></motion.div>
          ) : null}
        </AnimatePresence>
        {props.children}
      </div>
    </div>
  );
};

export default Checkbox;
