import * as types from "./actionTypes";
import axios from "axios";

const fetchCocktailStart = () => ({
    type: types.FETCH_COCKTAIL_START,
})

const fetchCocktailSuccess = (cocktails) => ({
    type: types.FETCH_COCKTAIL_SUCCESS,
    payload: cocktails,
})

const fetchCocktailFail = (error) => ({
    type: types.FETCH_COCKTAIL_FAIL,
    payload: error,
})

const fetchSingleCocktailStart = () => ({
    type: types.GET_COCKTAIL_START,
})

const fetchSingleCocktailSuccess = (cocktails) => ({
    type: types.GET_COCKTAIL_SUCCESS,
    payload: cocktails,
})

const fetchSingleCocktailFail = (error) => ({
    type: types.GET_COCKTAIL_FAIL,
    payload: error,
})

const fetchSearchCocktailStart = () => ({
    type: types.SEARCH_COCKTAIL_START,
})

const fetchSearchCocktailSuccess = (cocktails) => ({
    type: types.SEARCH_COCKTAIL_SUCCESS,
    payload: cocktails,
})

const fetchSearchCocktailFail = (error) => ({
    type: types.SEARCH_COCKTAIL_FAIL,
    payload: error,
})

export function fetchCocktail() {
    return function (dispatch) {
        dispatch(fetchCocktailStart());
        axios.get("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=").then((response) => {
            const cocktails = response.data.drinks;
            dispatch(fetchCocktailSuccess(cocktails));
        }).catch((error) => {
            dispatch(fetchCocktailFail(error));
        });
    };
}

export function fetchSearchCocktail(searchText) {
    return function (dispatch) {
        dispatch(fetchSearchCocktailStart());
        axios
            .get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchText}`)
            .then((response) => {
                const cocktails = response.data.drinks;
                dispatch(fetchSearchCocktailSuccess(cocktails));
            })
            .catch((error) => {
                dispatch(fetchSearchCocktailFail(error));
            });
    };
}

export function fetchSingleCocktail(id) {
    return function (dispatch) {
        dispatch(fetchSingleCocktailStart());
        axios
            .get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
            .then((response) => {
            const cocktail = response.data.drinks;
            dispatch(fetchSingleCocktailSuccess(cocktail));
        })
            .catch((error) => {
            dispatch(fetchSingleCocktailFail(error));
        });
    };
}