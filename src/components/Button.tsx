import React, { ReactNode } from "react";

interface Props {
  color?: "secondary" | "primary" | "danger";
  children: string;
  onClick: () => void;
}

export default function Button({
  color = "primary",
  children,
  onClick,
}: Props) {
  return (
    <button className={"btn btn-" + color} onClick={onClick}>
      {children}
    </button>
  );
}
