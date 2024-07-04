import React from 'react';
import s from "./SearchBox.module.css"

function SearchBox({searchName, setSearchName}) {
    const searchContact = (e) => setSearchName(e.target.value);

    return (

        <div className={s.searchBox}>
            <label>Find contacts by name</label>
            <input type="text" name="name"
                   value={searchName} onChange={searchContact}/>
        </div>
    );
}

export default SearchBox;