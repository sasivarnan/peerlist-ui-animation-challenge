import clsx from "clsx";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

import BarsIcon from "./icons/bars-solid.svg?react";
import CrossIcon from "./icons/xmark-solid.svg?react";

import styles from "./FloatingMenu.module.css";

type MenuItem = {
  icon: any;
  id: string;
};

type Props = {
  menuItems: MenuItem[];
  onMenuItemClick: (item: MenuItem) => void;
};

const FloatingMenu = (props: Props) => {
  const [showMenuItems, setShowMenuItems] = useState(false);

  const toggleMenuItems = () =>
    setShowMenuItems((showMenuItems) => !showMenuItems);

  return (
    <div className={styles.root}>
      <button
        type="button"
        className={clsx(
          styles["icon-container"],
          styles["icon-container-parent"]
        )}
        onClick={toggleMenuItems}
      >
        {showMenuItems ? (
          <CrossIcon className={styles["icon-image"]} />
        ) : (
          <BarsIcon className={styles["icon-image"]} />
        )}
      </button>
      <AnimatePresence>
        {showMenuItems
          ? props.menuItems?.map((item, index) => (
              <motion.button
                type="button"
                initial={{ top: 0, opacity: 0 }}
                animate={{ top: (index + 1) * 50, opacity: 1 }}
                transition={{ delay: index * 0.05 }}
                exit={{ top: 0, opacity: 0 }}
                key={item.id}
                className={clsx(
                  styles["icon-container"],
                  styles["icon-container-child"]
                )}
                onClick={() => {
                  props.onMenuItemClick(item);
                  toggleMenuItems();
                }}
              >
                <item.icon className={styles["icon-image"]} />
              </motion.button>
            ))
          : null}
      </AnimatePresence>
    </div>
  );
};

export default FloatingMenu;
