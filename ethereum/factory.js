import web3 from "./web3";
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0xDd7300Ff86CE5B9F9eE24F65a3169F2B2191Ce60'
);

export default instance;