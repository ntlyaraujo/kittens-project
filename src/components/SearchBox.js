import React from 'react';

const SearchBox = ({searchfield,searchChange}) => {
    return (
        <div className="pa2">
            <input className="pa2 ba b--transparent bg-washed-red" 
                   type="search" 
                   placeholder="Search Kitty"
                   onChange={searchChange}/>
        </div>
    );
}
export default SearchBox;