import axios from 'axios'

export const BASE_URL = 'https://api.coingecko.com/api/v3'
export const URL_ID = '/coins/markets?vs_currency=usd&ids='
export const ALL_COINS =
  'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'


const api = axios.create({
  baseURL: BASE_URL,
})


export default api
