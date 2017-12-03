import actionTypes from './productPageActionTypes';

export function setProductColor(productColor) {
  let imageSrc = 'https://dl.dropboxusercontent.com/s/38pwoyygf2art8v/var1.png';
  if (productColor === 'Lavender') {
    imageSrc = 'https://dl.dropboxusercontent.com/s/w1ihqb5hadv228g/var2.png';
  }
  return {
    type: actionTypes.SET_PRODUCT_COLOR,
    productColor,
    imageSrc,
  };
}
