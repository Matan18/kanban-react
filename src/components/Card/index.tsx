import { useDrag } from "../../hooks/useDrag";
import styles from "./styles.module.scss";

type Props = {
  children: string;
}

export const Card = ({ children }: Props) => {
  const { setDragingComponent, dragingComponent } = useDrag();
  return (
    <div
      className={`${styles.card} ${dragingComponent && styles.isDragging}`}
      draggable="true"
      onDragStart={e => setDragingComponent(e.target as HTMLDivElement)}
      onDragEnd={() => setDragingComponent(undefined)}
    >
      <div className={`${styles.status} ${styles.green}`}></div>
      <div className={styles.content}>{children}</div>
    </div >
  )
}