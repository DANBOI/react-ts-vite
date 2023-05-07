import { MouseEvent, useState } from "react";

interface Props {
  items: string[];
  heading: string;
  // onSelectItem: (item: string) => void;
}

export default function ListGroup({ items, heading }: Props) {
  // const handleClick = (event:MouseEvent)=>{console.log("123")}
  const [SelectedIndex, setSelectedIndex] = useState(-1);
  return (
    <>
      <h1>{heading} List</h1>
      {items.length === 0 && <p>no items found!</p>}
      <ul className="list-group">
        {items.map((ele, i) => (
          <li
            key={i}
            className={`list-group-item ${SelectedIndex === i ? "active" : ""}`}
            onClick={() => {
              setSelectedIndex(i);
              // onSelectItem(ele);
            }}
          >
            {ele}
          </li>
        ))}
      </ul>
    </>
  );
}
