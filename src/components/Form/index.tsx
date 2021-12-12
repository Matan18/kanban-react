import { useState } from "react";
import { useDrag } from "../../hooks/useDrag";


export const Form = () => {
  const [text, setText] = useState('');
  const { createCard } = useDrag();

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    if (text)
      createCard(text);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">Criar</button>
    </form>
  );
}