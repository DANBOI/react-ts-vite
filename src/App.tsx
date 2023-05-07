import React from "react";
import ListGroup from "./components/ListGroup";

type Props = {};

export default function App({}: Props) {
  const items = [
    "An item",
    "A second item",
    "A third item",
    "A fourth item",
    "And a fifth one",
  ];

  const handleSelectItem = (item: string) => console.log(item);
  return (
    <div>
      <ListGroup items={items} heading="Game" onSelectItem={handleSelectItem} />
    </div>
  );
}
