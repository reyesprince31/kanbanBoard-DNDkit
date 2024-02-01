import { useState } from "react";
import { Column, Id } from "../utils/types";

import ColumnContainer from "./ColumnContainer";
import PlusIcon from "./Icons/PlusIcon";

function KanbanBoard() {
  const [columns, setColumns] = useState<Column[]>([]);

  const createNewColumn = () => {
    const columnToAdd: Column = {
      id: crypto.randomUUID(),
      title: `Column ${columns.length + 1}`,
    };

    setColumns([...columns, columnToAdd]);
  };

  const deleteColumn = (id: Id) => {
    const filteredColumn = columns.filter((col) => col.id !== id);
    setColumns(filteredColumn);
  };

  return (
    <div className="min-h-screen w-full flex items-center m-auto px-[40px] overflow-x-auto overflow-y-hidden">
      <div className="m-auto flex">
        <div className="flex gap-2">
          {columns.map((col) => (
            <ColumnContainer
              key={col.id}
              column={col}
              deleteColumn={deleteColumn}
            />
          ))}
        </div>
        <button
          className="flex items-center gap-2 h-[60px] w-[350px] min-[350px] p-2 cursor-pointer bg-mainBackgroundColor border-columnBackgroundColor border-2 hover:ring-2 ring-rose-500 rounded-lg"
          onClick={() => createNewColumn()}>
          <PlusIcon />
          Add Column
        </button>
      </div>
    </div>
  );
}

export default KanbanBoard;
