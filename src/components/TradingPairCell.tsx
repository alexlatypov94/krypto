import { faThumbTack } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

interface TradingPairCellProps {
  name: string;
  isPinned: boolean;
}

export const TradingPairCell: React.FC<TradingPairCellProps> = ({ name, isPinned }: TradingPairCellProps) => {
  return (
    <div className="flex gap-2 items-center p-2">
      <button className="rounded-full border border-black w-7 h-7 hover:bg-gray-500">
        <FontAwesomeIcon icon={faThumbTack} color={isPinned ? '#333' : 'red'} />
      </button>
      <div>{name}</div>
    </div>
  );
};
