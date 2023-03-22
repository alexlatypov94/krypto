import {
  BinanceLogo,
  BybitLogo,
  CurrencyLogo,
  DeltaLogo,
  GateIoLogo,
  HuobiLogo,
  KrakenLogo,
  KucoinLogo,
  OkxLogo,
} from '../assets';

export const ROUTES = {
  main: '/',
};

export const BASE_URLS = {
  binance_futures: 'https://fapi.binance.com',
  binance_spot: 'https://api.binance.com',
  okx: 'https://www.okx.com/api/v5',
  bybit: 'https://api.bybit.com',
  kucoin_futures: 'https://api-futures.kucoin.com',
  kucoin_spot: 'https://api.kucoin.com',
  gateIo: 'https://api.gateio.ws/api/v4',
};

export const TABLE_HEAD = [
  {
    id: 'tradingPair',
    name: 'Торговая пара',
    isExchange: false,
  },
  {
    id: 'delta',
    logo: DeltaLogo,
    name: 'delta',
    isExchange: false,
  },
  {
    id: 'binance',
    logo: BinanceLogo,
    isExchange: true,
  },

  {
    id: 'bybit',
    logo: BybitLogo,
    isExchange: true,
  },

  {
    id: 'kucoin',
    logo: KucoinLogo,
    isExchange: true,
  },
  {
    id: 'okx',
    logo: OkxLogo,
    isExchange: true,
  },
  {
    id: 'huobi',
    logo: HuobiLogo,
    isExchange: true,
  },
  {
    id: 'gateIo',
    logo: GateIoLogo,
    isExchange: true,
  },
  {
    id: 'kraken',
    logo: KrakenLogo,
    isExchange: true,
  },
  {
    id: 'currency',
    logo: CurrencyLogo,
    isExchange: true,
  },
  {
    id: 'currency1',
    logo: CurrencyLogo,
    isExchange: true,
  },
  // {
  //   id: 'LAR',
  //   logo: CurrencyLogo,
  //   isExchange: true,
  // },
];
