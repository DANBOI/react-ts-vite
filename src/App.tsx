import React, { useState } from "react";
import ListGroup from "./components/ListGroup";
import Message from "./components/message";

type Props = {};

export default function App({}: Props) {
  const items = [
    "An item",
    "A second item",
    "A third item",
    "A fourth item",
    "And a fifth one",
  ];

  const [isHidden, setIsHidden] = useState(true);
  const handleSelectItem = (item: string) => {
    console.log(item);
    setIsHidden(!isHidden);
  };
  // const handlDisplayMessage = (item: string) => {
  //   return true
  // }
  return (
    <div>
      <Message isHidden={isHidden}>This is a test!</Message>
      <ListGroup items={items} heading="Game" onSelectItem={handleSelectItem} />
    </div>
  );
}
