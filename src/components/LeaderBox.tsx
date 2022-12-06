import React from "react";

//DATA
import { data } from "../utils/testData";

const LeaderBox: React.FC = () => {
  const content: JSX.Element[] = data.map((el) => {
    return (
      <div className="leader-single">
        <div>Rank: {el.rank}</div>
        <div>Username: {el.username}</div>
        <div>MMR: {el.MMR}</div>
        <hr />
      </div>
    );
  });

  return (
    <div id="leader-box" className="card">
      {content}
    </div>
  );
};

export default LeaderBox;
