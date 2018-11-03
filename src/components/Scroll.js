import React from 'react';
import './Scroll.css';

const Scroll = (props) => {
    return (
        <div style={{overflow: 'scroll',border: '1px solid #FFDFDF', height:'500px'}}>
            {props.children}
        </div>
    );
}

export default Scroll