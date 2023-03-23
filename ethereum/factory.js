import web3 from "./web3";
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0x271e25010fBCB47bB219637756B96f0070AA1B01'
);

export default instance;