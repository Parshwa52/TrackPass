import web3 from './web3';
import trackpass from './build/TrackPassenger.json';

const instance = new web3.eth.Contract(
  JSON.parse(trackpass.interface), '0xA166B87C7F32dE26768Be8D2525ce8648EA032Ed');

export default instance;
