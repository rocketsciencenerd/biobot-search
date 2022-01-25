import React from 'react';
import {getShippingInfoByID} from '../api/Api';


// Example of a unit test
test('gets shipping info from api fallback by id', () => {

  const expected = {
    "id": 4,
    "label_id": "94-748-4437",
    "shipping_tracking_code": "7763306017"
  };

  getShippingInfoByID('94-748-4437').then((response) => {
    expect(response).toBe(expected);
  })
});
