import React, {useEffect, useState, useRef} from "react";
import {fetchSearchCocktail} from "../redux/action";
import {useDispatch} from "react-redux";



const Search = () => {
    const searchValue = useRef();
    let dispatch = useDispatch();
    const searchCocktail = () => {
        dispatch(fetchSearchCocktail(searchValue.current.value))
    }
    const handleSubmit = (e) => {
        e.preventDefault();
    };
    return (
        <div className="form-section">
            <form className="form" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Find your favorite cocktail</label>
                    <input type="text" name="name" id="name" ref={searchValue} onChange={searchCocktail}/>
                </div>
            </form>

        </div>
    )
}

export default Search;