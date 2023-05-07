//rafce tsrfc

import { ReactNode, useState } from "react";

interface Props {
  //   children: string;
  isHidden: boolean;
  children: ReactNode;
}

const Message = ({ children, isHidden }: Props) => {
  //   const [isHidden, setIsHidden] = useState(true);

  return (
    <div className={`alert alert-primary ${isHidden ? "visually-hidden" : ""}`}>
      {children}
    </div>
  );
};

export default Message;
