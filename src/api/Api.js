import axios from 'axios';
import {shippingData} from '../data/KITS_SHIPPING_DATA_FALLBACK';

const testKitDataApiUrl = 'http://localhost:4000/shipping_data';

export const getTestKitShippingInfo = async() => {
  return axios.get(testKitDataApiUrl).then((resp) => {
    const { data } = resp || {};
    return data;
  }).catch(() => {
    console.error('Api unavailable, loading from JSON ...');
    return shippingData;
  });
}

export const getShippingInfoByID = async(id) => {
  const url = `${testKitDataApiUrl}?label_id=${id}`;
  return axios.get(url).then((resp) => {
    const { data } = resp || {};
    return data;
  }).catch(() => {
    console.error('Api unavailable, loading from JSON ...');
    return [shippingData.find(o => o.label_id === id)];
  });
}


export default {getTestKitShippingInfo, getShippingInfoByID};
