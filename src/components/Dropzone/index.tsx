import { useRef } from 'react';
import { useDrag } from '../../hooks/useDrag';
import styles from './styles.module.scss';

type Props = {
  children: React.ReactNode;
}

export const Dropzone = ({ children }: Props) => {
  const dropZoneRef = useRef<HTMLDivElement>(null);
  const { dragingComponent } = useDrag();
  return (
    <div
      ref={dropZoneRef}
      className={`${styles.dropzone} ${dragingComponent && styles.highlight}`}
      onDragOver={() => {
        if (dragingComponent)
          dropZoneRef.current?.appendChild(dragingComponent)
      }}
    >
      {children}
    </div>
  );
}
