import { Board } from "./components/Board";
import { Card } from "./components/Card";
import { Dropzone } from "./components/Dropzone";
import { Form } from "./components/Form";
import { useDrag } from "./hooks/useDrag";
import styles from "./styles.module.scss";

function App() {
  const { cardList } = useDrag();
  return (
    <div className={styles.main}>
      <div className={styles.boards}>
        <Board text="Todo">
          <Dropzone>
            {cardList.map(item => (
              <Card>{item.name}</Card>
            ))}
          </Dropzone>
        </Board>
        <Board text="In progress">
          <Dropzone>
          </Dropzone>
        </Board>
        <Board text="Done">
          <Dropzone>
          </Dropzone>
        </Board>
      </div>
      <Form />
    </div>
  )
}

export default App
