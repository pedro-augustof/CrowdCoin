import web3 from "./web3";
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    CampaignFactory.abi,
    '0xF12842396b72782bA38de677D39Cccb6FE390560'
);

export default instance;