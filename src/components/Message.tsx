//rafce tsrfc

import { ReactNode, useState } from "react";

interface Props {
  //   children: string;
  children: ReactNode;
  closeMessage: () => void;
}

const Message = ({ children, closeMessage }: Props) => {
  //   const [isHidden, setIsHidden] = useState(true);

  return (
    <div
      className="alert alert-warning alert-dismissible fade show"
      role="alert"
    >
      {children}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={closeMessage}
      ></button>
    </div>
  );
};

export default Message;
