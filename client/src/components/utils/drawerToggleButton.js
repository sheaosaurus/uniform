import React from 'react';


const DrawerToggleButton = props => (
    <button className="toggle-button" onClick={props.click}>
    	<div style={{background: props.togglebck}} className="toggle-button__line"></div>
    	<div style={{background: props.togglebck}} className="toggle-button__line"></div>
    	<div style={{background: props.togglebck}} className="toggle-button__line"></div>
    </button>
)


export default DrawerToggleButton;
