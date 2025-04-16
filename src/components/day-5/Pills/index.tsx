import clsx from "clsx";
import styles from "./Pills.module.css";

export type PillData = {
  id: string;
  icon: React.ComponentType<{ className?: string }>;
  label: string;
};

type Props = {
  data: PillData;
  active?: boolean;
  onClick: (id: string) => void;
};

const Pills = (props: Props) => {
  const { id, icon: Icon, label } = props.data;

  return (
    <button
      className={clsx(styles.root, {
        [styles.active]: props.active,
      })}
      onClick={() => props.onClick(id)}
    >
      {Icon ? <Icon className={styles.icon} /> : null}
      <span>{label}</span>
    </button>
  );
};

export default Pills;
