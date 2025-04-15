import { motion } from "motion/react";
import clsx from "clsx";

import styles from "./Tabs.module.css";

export type TabItem = {
  id: string;
  content: React.ReactNode;
  children?: TabItem[];
};

type Props = {
  tabs: TabItem[];
  active: string;
  onTabChange: (id: string) => void;
  nested?: boolean;
  className?: string;
};

const Tabs = (props: Props) => {
  return (
    <div
      className={clsx(styles.root, props.className, {
        [styles["root-first"]]: !props.nested,
      })}
    >
      {props.tabs.map((tab) => {
        const isActive = props.active === tab.id;
        const isChildActive = isActive
          ? false
          : tab.children?.some((childTab) => childTab.id === props.active);

        return (
          <button
            key={tab.id}
            className={clsx(styles["tab-item"], {
              [styles.active]: isActive,
            })}
            role="tab"
            onClick={(event) => {
              event.stopPropagation();
              props.onTabChange(tab.children ? tab.children[0].id : tab.id);
            }}
          >
            {isActive && (
              <motion.div
                layoutId="active-tab"
                className={styles["active-tab-indicator"]}
              ></motion.div>
            )}

            {tab.children ? (
              isChildActive ? (
                <motion.div>
                  <Tabs
                    tabs={tab.children}
                    onTabChange={props.onTabChange}
                    active={props.active}
                    nested
                  />
                </motion.div>
              ) : (
                <div>
                  <motion.div className={styles["tab-content"]}>
                    {tab.content}
                  </motion.div>

                  <div className={styles["child-tab-content"]}>
                    {tab.children.map((childTab) => (
                      <motion.span
                        layoutId={`tab-content-${childTab.id}`}
                        key={childTab.id}
                      >
                        {childTab.content}
                      </motion.span>
                    ))}
                  </div>
                </div>
              )
            ) : (
              <motion.div
                className={styles["tab-content"]}
                layoutId={`tab-content-${tab.id}`}
              >
                {tab.content}
              </motion.div>
            )}
          </button>
        );
      })}
    </div>
  );
};

export default Tabs;
