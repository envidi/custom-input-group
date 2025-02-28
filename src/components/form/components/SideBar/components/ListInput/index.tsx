import tw from 'twin.macro';
import React from 'react';
interface Props {
  handleApply: () => void;
}
export const ListInput = ({ handleApply }: Props) => {
  return (
    <>
      <h2 tw="text-slate-700" css={[tw`text-[rgb(255,0,0)]`]}>
        List input
      </h2>
      <div tw="flex flex-col gap-3">
        <button
          className="droppable-element border border-black/50 border-solid rounded-md"
          draggable={true}
          tw="py-2 cursor-pointer select-none"
          onDragStart={(e) => e.dataTransfer.setData('text/plain', 'NumberField')}
        >
          Number field
        </button>
        <button
          className="droppable-element border border-black/50 border-solid rounded-md"
          draggable={true}
          tw="py-2 cursor-pointer select-none"
          onDragStart={(e) => e.dataTransfer.setData('text/plain', 'TextField')}
        >
          Text Field
        </button>
        <button
          className="droppable-element border border-black/50 border-solid rounded-md"
          draggable={true}
          tw="py-2 cursor-pointer select-none"
          onDragStart={(e) => e.dataTransfer.setData('text/plain', 'PasswordField')}
        >
          Password Field
        </button>
        <button onClick={handleApply} className="border border-black/30 border-solid rounded-md">
          Apply
        </button>
      </div>
    </>
  );
};
