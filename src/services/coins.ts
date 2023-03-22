import axios from 'axios';

const BASE_URL = 'http://localhost:4000';

export class Coins {
  static async getCoins() {
    return await axios({
      method: 'GET',
      url: `${BASE_URL}/cryptoPrices`,
    });
  }
}
