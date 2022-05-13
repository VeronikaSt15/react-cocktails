import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom"
import  {fetchSingleCocktail} from "../redux/action"
import {useSelector, useDispatch} from "react-redux";
import {Link} from "react-router-dom";

const SingleCocktail = () => {
    const {cocktail, loading} = useSelector((state) => ({...state.data}));
    const [modifiedCocktail, setModifiedCocktail] = useState(null);
    const {id} = useParams();
    let dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchSingleCocktail(id));
    }, [id]);

    useEffect(() => {
        if (cocktail.length > 0) {
            const {
                strDrink: name,
                idDrink: id,
                strDrinkThumb: image,
                strInstructions: instructions,
                strGlass: glass,
                strIngredient1,
                strIngredient2,
                strIngredient3,
                strIngredient4,
                strIngredient5,
                strIngredient6
            } = cocktail[0];
            const ingredients = [
                strIngredient1,
                strIngredient2,
                strIngredient3,
                strIngredient4,
                strIngredient5,
                strIngredient6
            ]
            const newCocktail = {
                name,
                id,
                image,
                glass,
                ingredients,
                instructions
            };
            setModifiedCocktail(newCocktail);
        } else {
            setModifiedCocktail(null);
        }
    }, [id, cocktail]);

    if(!modifiedCocktail) {
        return <div>

        </div>
    } else {
        const {name, id, image, ingredients, instructions, glass } = modifiedCocktail;
        return (
            <>
                {
                    loading ? (
                        <div className="container">
                            <span>Loading</span>
                        </div>

                    ): (
                        <div className="container flex-row" key={id}>
                           <div>
                               <img alt={id} src={image} />
                           </div>
                           <div>
                               <h2>Name: {name}</h2>
                               <h5>id: {id}</h5>
                               <div className="cocktail-info">
                                   <span className="bold">Glass:</span>
                                   <span> {glass}</span>
                               </div>
                               <div className="cocktail-info">
                                   <span className="bold">How to do: </span>
                                   <span>{instructions}</span>
                               </div>
                               <div className="cocktail-info">
                                   <span className="bold">Ingredients: </span>
                                   <ul>
                                       {ingredients.map((item, index) => {
                                           return item ? <li key={index}>{item} </li> : null;
                                       })}
                                   </ul>
                               </div>
                               <Link to="/">
                                   <button className="button">Back</button>
                               </Link>
                           </div>
                        </div>
                    )}
            </>
        );
    }

};

export default SingleCocktail;