import React from "react";
import { MdSearch } from "react-icons/md";

const Search = ({handleSearchNote}) => {
    return (
        <>
            <div className="photoBody">
                <div className="search">
                    <MdSearch className="search-icons" size= '20px' />
                    <input 
                        onChange={(event)=> handleSearchNote (event.target.value) } 
                        type="text" 
                        placeholder="Type to search" 
                    />
                </div>
                </div>
        </>
    )
}

export default Search