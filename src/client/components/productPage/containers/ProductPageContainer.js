import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as productPageActionCreators from '../../../action-creators/productPage/productPageActions.js';
import ProductPage from '../ProductPage.js';

const mapStateToProps = (state) => {
  return {
    productPageReducers: state.productPageReducers,
  };
};

const bundledActionCreators = Object.assign({},
  productPageActionCreators,
);

const mapDispatchToProps = dispatch => bindActionCreators(bundledActionCreators, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);
