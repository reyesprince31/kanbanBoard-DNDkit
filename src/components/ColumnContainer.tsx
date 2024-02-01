import { Column, Id } from "../utils/types";
import BarsIcon from "./Icons/BarsIcon";
import DeleteIcon from "./Icons/DeleteIcon";

interface Props {
  column: Column;
  deleteColumn: (id: Id) => void;
}

function ColumnContainer({ column, deleteColumn }: Props) {
  return (
    <div className="w-[350px] h-[500px] min-h-[500px] flex flex-col bg-columnBackgroundColor">
      <div className="flex text-md p-3 font-bold bg-mainBackgroundColor border-4 border-columnBackgroundColor h-[60px] gap-2 rounded-t-md items-center justify-between">
        <div className="flex gap-2 items-center">
          <div className="bg-columnBackgroundColor rounded-lg flex justify-center items-center px-2 py-1 text-sm">
            <BarsIcon />
          </div>
          <div>{column.title}</div>
        </div>
        <button
          className="stroke-gray-500 hover:stroke-white hover:bg-columnBackgroundColor rounded px-2 py-1"
          onClick={() => deleteColumn(column.id)}>
          <DeleteIcon />
        </button>
      </div>
      <div className="flex flex-grow">Container</div>
      <div>Footer</div>
    </div>
  );
}

export default ColumnContainer;
