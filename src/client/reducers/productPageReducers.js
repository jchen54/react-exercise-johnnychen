import actionTypes from '../action-creators/productPage/productPageActionTypes.js';

const initialState = {
  productColor: 'Verdant',
  imageSrc: 'https://dl.dropboxusercontent.com/s/38pwoyygf2art8v/var1.png',
};

const mapReducers = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_PRODUCT_COLOR:
      return {
        ...state,
        productColor: action.productColor,
        imageSrc: action.imageSrc,
      };
    default:
      return state;
  }
};

export default mapReducers;
