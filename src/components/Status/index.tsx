import React from "react";
import { useRecoilValue } from "recoil";

import { statusSelector } from "../../store/Todos";

const Status = (): JSX.Element => {
  const { totalNum, totalCompleted, totalUnCompleted, percentCompleted } =
    useRecoilValue(statusSelector);

  return (
    <ul className="flex justify-between mb-5">
      <li>Total items: {totalNum}</li>
      <li>Items completed: {totalCompleted}</li>
      <li>Items not completed: {totalUnCompleted}</li>
      <li>Percent completed: {percentCompleted} %</li>
    </ul>
  );
};

export default Status;
