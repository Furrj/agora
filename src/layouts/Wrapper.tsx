import React from "react";

interface IProps {
  children: React.ReactNode;
}

const Wrapper: React.FC<IProps> = ({ children }) => {
  return (
    <div className="row">
      <div className="col-8 offset-2 mt-3">{children}</div>
    </div>
  );
};

export default Wrapper;
