import React from 'react';
import Card from './Card.js';
import 'tachyons';

const Cardlist = ({kitties}) => {
    /* if(true){
        throw new Error('something bad happens');
    } */
    const kittyComponent = kitties.map((element,index) => {
        return <Card key={index} id={element.id} name={element.name} username={element.username} email={element.email} />;
    });
    return (
        <div className="App">
            {kittyComponent}
        </div>
    );
}

export default Cardlist;