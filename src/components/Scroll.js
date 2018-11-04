import React from 'react';
import './Scroll.css';

const Scroll = (props) => {
    return (
        <div style={{overflow: 'scroll',border: '10px solid #FFDFDF', height:'500px', borderRight:'0px', borderBottom:'0px'}}>
            {props.children}
        </div>
    );
}

export default Scroll