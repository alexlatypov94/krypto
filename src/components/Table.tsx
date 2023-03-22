import React from 'react';
import { useAppSelector } from '../app/hooks';
import { useBinanceWebSockets } from '../hooks';
import { useByBitWebSockets } from '../hooks/useBybitWebsocket';
import { coinsSelector } from '../store/coins';
import { PriceCell } from './PriceCell';
import { TableHeader } from './TableHeader';
import { TradingPairCell } from './TradingPairCell';

export const Table = React.memo(() => {
  const { coins } = useAppSelector(coinsSelector);
  // const { futures, spots } = useBinanceWebSockets();
  // const { futures: byBitFutures, spots: byBitSpots } = useByBitWebSockets();
  console.log(coins);
  return (
    <div className="mt-4">
      <TableHeader />

      {Object.entries(coins).map(([coin, data]) => {
        return (
          <div className="grid grid-cols-12 p-2 border-b" key={coin as string}>
            <TradingPairCell name={coin as string} isPinned={false} />
            <div>{coin}</div>
            {Object.values(data).map((el: any, index) => (
              <PriceCell
                key={index}
                spotAsk={el.spot?.askPrice}
                spotBid={el.spot?.bidPrice}
                futureAsk={el.futures?.askPrice}
                futureBid={el.futures?.bidPrice}
              />
            ))}
            {/* <PriceCell
              spotAsk={spots[el]?.askPrice}
              spotBid={spots[el]?.bidPrice}
              futureAsk={futures[el]?.askPrice}
              futureBid={futures[el]?.bidPrice}
            /> */}
          </div>
        );
      })}
    </div>
  );
});

Table.displayName = 'Table';
