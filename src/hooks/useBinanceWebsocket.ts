import { useAppSelector, useAppDispatch } from './../app/hooks';
import { useEffect } from 'react';
// import {
//   binanceSelector,
//   changeBinanceCoinsFuturePrice,
//   changeBinanceCoinsSpotPrice,
// } from '../store/binance';

export const useBinanceWebSockets = () => {
  // const { futures, spots } = useAppSelector(binanceSelector);
  const dispatch = useAppDispatch();
  useEffect(() => {
    const futuresWebsocket = new WebSocket('wss://fstream.binance.com/ws/!bookTicker');
    const spotWebsocket = new WebSocket('wss://stream.binance.com:9443/stream?streams=!ticker@arr');

    futuresWebsocket.onmessage = (event) => {
      // dispatch(changeBinanceCoinsFuturePrice(JSON.parse(event.data)));
    };
    spotWebsocket.onmessage = (event) => {
      // dispatch(changeBinanceCoinsSpotPrice(JSON.parse(event.data).data));
    };

    return () => {
      futuresWebsocket.close();
      spotWebsocket.close();
    };
  }, [dispatch]);

  // return { futures, spots };
};
