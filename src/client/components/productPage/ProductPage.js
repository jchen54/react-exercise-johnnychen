import React from 'react';
import Paper from 'material-ui/Paper';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreHorizIcon from 'material-ui/svg-icons/navigation/more-horiz';
import KeyboardBackspaceIcon from 'material-ui/svg-icons/hardware/keyboard-backspace';
import './productPageStyles.css';

const ProductPage = (props) => {
  return (
    <div className="app">
      <div className="nav">
        <IconButton className="back-icon"><KeyboardBackspaceIcon /></IconButton>
        <div className="title">Petrichor Vase</div>
        <IconMenu
          className="more-icon"
          iconButtonElement={<IconButton><MoreHorizIcon /></IconButton>}
        >
          <MenuItem value="1" primaryText="Refresh" />
          <MenuItem value="2" primaryText="Send feedback" />
          <MenuItem value="3" primaryText="Settings" />
          <MenuItem value="4" primaryText="Help" />
          <MenuItem value="5" primaryText="Sign out" />
        </IconMenu>
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
