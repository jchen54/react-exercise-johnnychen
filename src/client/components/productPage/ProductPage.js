import React from 'react';
import './productPageStyles.css';

const ProductPage = (props) => {
  return (
    <div className="app">
      <div className="nav">
        <svg className="back-icon" version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25px" height="25px" viewbox="0 0 25 25" enableBackground="new 0 0 25 25">
          <polyline className="back-style-0" points="10,17.5 5,12.5 10,7.5"></polyline>
          <line className="back-style-0" x1="20" y1="12.5" x2="5" y2="12.5"></line>
          <rect className="back-style-1" width="25" height="25"></rect>
        </svg>
        <div className="title">Petrichor Vase</div>
        <svg className="more-icon" version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25px" height="25px" viewbox="0 0 25 25" enableBackground="new 0 0 25 25">
          <circle className="more-style-0" cx="6.5" cy="12.5" r="1.5"></circle>
          <circle className="more-style-0" cx="12.5" cy="12.5" r="1.5"></circle>
          <circle className="more-style-0" cx="18.5" cy="12.5" r="1.5"></circle>
          <rect className="more-style-1" width="25" height="25"></rect>
        </svg>
      </div>
      <div className="content">
        <div className="scale-container">
          <img id="image" src={props.productPageReducers.imageSrc} alt="" />
        </div>
        <div className="toggle">
          <div className="variable variable-active" id="var1" onClick={() => { props.setProductColor('Verdant'); }}></div>
          <div className="variable" id="var2" onClick={() => { props.setProductColor('Lavender'); }}></div>
          <div id="variable-title">{props.productPageReducers.productColor}</div>
        </div>
        <div className="description">Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the value.</div>
      </div>
      <div className="add-button">$100</div>
    </div>
  );
}

export default ProductPage;
