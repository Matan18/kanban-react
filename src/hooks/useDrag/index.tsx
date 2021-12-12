import React, { createContext, useContext, useState } from 'react';

type Props = {
  children: React.ReactNode;
}

type ICardItem = {
  name: string;
}

type IDragContextData = {
  dragingComponent?: HTMLDivElement,
  setDragingComponent: React.Dispatch<React.SetStateAction<HTMLDivElement | undefined>>
  cardList: ICardItem[];
  setCardList: React.Dispatch<React.SetStateAction<ICardItem[]>>;
  createCard: (name: string) => void;
};

const Context = createContext({} as IDragContextData);

export const DragProvider = ({ children }: Props) => {
  const [dragingComponent, setDragingComponent] = useState<HTMLDivElement>();
  const [cardList, setCardList] = useState<ICardItem[]>([]);

  const createCard = (name: string) => {
    setCardList(prev => [...prev, { name }]);
  }

  return (
    <Context.Provider
      value={{
        dragingComponent,
        setDragingComponent,
        cardList,
        setCardList,
        createCard,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export const useDrag = () => {
  const context = useContext(Context);
  if (!context) throw new Error("You must use 'useDrag' inside DragProvider");
  return context;
};