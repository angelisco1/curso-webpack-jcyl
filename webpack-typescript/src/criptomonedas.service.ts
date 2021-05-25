import axios, { AxiosResponse } from 'axios';

const getPrecioCriptomoneda = (criptomoneda: string): Promise<string> => {
  return axios.get('https://api.coingecko.com/api/v3/coins/' + criptomoneda)
    .then((response: AxiosResponse<any>) => {
      // console.log(response.data.market_data.current_price.eur);
      return response.data.market_data.current_price.eur + '€';
    })
}

export { getPrecioCriptomoneda }