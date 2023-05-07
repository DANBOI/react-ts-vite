import React, { useState } from "react";
import ListGroup from "./components/ListGroup";
import Message from "./components/message";
import Button from "./components/Button";

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
  const handleClick = () => {
    setIsHidden(false);
  };

  return (
    <div>
      {!isHidden && (
        <Message closeMessage={() => setIsHidden(true)}>
          <strong>Holy guacamole!</strong> You should check in on some of those
          fields below.
        </Message>
      )}
      <ListGroup items={items} heading="Game" />
      <Button onClick={handleClick}>mybutton</Button>
    </div>
  );
}
