/* eslint-disable @typescript-eslint/no-explicit-any */
export const createSymbolQuery = (tradingPairs: string[]) => {
  return tradingPairs.map((el) => `%22${el}%22`).join(',');
};

export const mapAskBidCoins = (arr: any[], tradingPairs: string[], askKey: string, bidKey: string) => {
  return arr.reduce((acc: any, curr: any) => {
    if (tradingPairs.includes(curr.symbol)) {
      return {
        ...acc,
        [curr.symbol]: {
          askPrice: curr[askKey],
          bidPrice: curr[bidKey],
          timestamp: curr?.time || Date.now(),
        },
      };
    }
    return acc;
  }, {});
};

export const createByBitWSCoinsSubscriber = (tradingPairs: string[]) => {
  return tradingPairs.map((el) => `tickers.${el}`);
};
