import React from 'react';

interface PriceCellProps {
  spotAsk: string | number;
  spotBid: string | number;
  futureAsk: string | number;
  futureBid: string | number;
}

export const PriceCell: React.FC<PriceCellProps> = React.memo(
  ({ spotAsk, spotBid, futureAsk, futureBid }: PriceCellProps) => {
    // console.log('render');
    return (
      <div className="grid grid-cols-2 gap-1">
        <div className="grid grid-rows-2">
          <div className="break-all text-rose-800">{Number(spotAsk) || ''}</div>
          <div className="break-all text-lime-800">{Number(spotBid) || ''}</div>
        </div>
        <div className="grid grid-rows-2">
          <div className="break-all text-rose-800">{Number(futureAsk) || ''}</div>
          <div className="break-all text-lime-800">{Number(futureBid) || ''}</div>
        </div>
      </div>
    );
  }
);

PriceCell.displayName = 'PriceCell';
