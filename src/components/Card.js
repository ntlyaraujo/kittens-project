import React from 'react';
import 'tachyons';

const Card = ({id, name, email}) => {
    let newId
    if(id === 10){
        newId = id*32-1;
    }else{
        newId = id*32;
    }
    return (
        <div className="bg-washed-yellow dib br3 pa3 ma3 grow bw2 shadow-5">
            <img alt="robots" src={`https://robohash.org/${newId}?set=set4`}/>
            <div>
                <h2 className="">{name}</h2>
                <p  className="blue">{email}</p>
            </div>
        </div>
    );
}

export default Card;