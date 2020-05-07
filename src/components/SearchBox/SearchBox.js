import React from "react";

import './SearchBox.css';

const SearchBox = ({searchChange})=>{
    return(
    <input 
    className="pa3 tc ba b--green bg-lightest-blue"
    type="search" 
    placeholder='search robots'
    onChange= {searchChange}
    />
    
    )   
}

export default SearchBox;