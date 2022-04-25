import React from "react";
import { useRecoilState } from "recoil";

import { filterState } from "../../store/Filter";
import { FilterKey } from "../../store/Filter/types";

const FilterForm = (): JSX.Element => {
  const [state, setState] = useRecoilState(filterState);

  return (
    <div className="flex justify-between mb-5">
      <select
        value={state}
        onChange={({ target: { value } }) => setState(value as FilterKey)}
      >
        <option value="all">Все</option>
        <option value="completed">Завершенные</option>
        <option value="uncompleted">Незавершенные</option>
      </select>
    </div>
  );
};

export default FilterForm;
