/* eslint-disable no-console */
import { useAppSelector, useAppDispatch } from './../app/hooks';
import { useEffect } from 'react';
import { createByBitWSCoinsSubscriber } from '../utils';
// import { tradingPairsSelector } from '../store/tradingPairs';
// import { ByBitSelector } from '../store/bybit';

export const useByBitWebSockets = () => {
  //   const { futures, spots } = useAppSelector(ByBitSelector);
  //   const { tradingPairs } = useAppSelector(tradingPairsSelector);
  const dispatch = useAppDispatch();
  useEffect(() => {
    const futuresWebsocket = new WebSocket('wss://stream.bybit.com/v5/public/linear');
    // const spotWebsocket = new WebSocket('wss://stream.binance.com:9443/stream?streams=!ticker@arr');
    futuresWebsocket.onopen = (event) => {
      console.log('WebSocket connection established');
      //   const coins = createByBitWSCoinsSubscriber(tradingPairs);
      futuresWebsocket.send(
        JSON.stringify({
          op: 'subscribe',
          //   args: coins,
        })
      );
    };

    futuresWebsocket.onerror = (error) => {
      console.log('onclose', error);
    };
    futuresWebsocket.onmessage = function (event) {
      // dispatch(changeBinanceCoinsSpotPrice(JSON.parse(event.data).data));
      console.log('onmessage', JSON.parse(event.data));
    };

    return () => {
      futuresWebsocket.close();
      //   spotWebsocket.close();
    };
  }, [dispatch]);

  //   return { futures, spots };
};
