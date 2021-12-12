import styles from "./styles.module.scss";

type Props = {
  text: string;
  children: React.ReactNode;
};

export const Board = ({ text, children }: Props) => (
  <div className={styles.board}>
    <h3>{text}</h3>
    {children}
  </div>
);