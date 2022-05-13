import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import { fetchCocktail } from "../redux/action";
import {Link} from "react-router-dom";
import "../App.css"

const CocktailList = () => {

    const { cocktails, loading } = useSelector((state) => ({...state.data}));
    const [modifiedCocktail, setModifiedCocktail ] = useState([]);
    let dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchCocktail())
    }, []);

    useEffect(() => {
        if (cocktails) {
            const newCoctails = cocktails.map((item) => {
                const {idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass} = item;
                return {
                    id: idDrink,
                    name: strDrink,
                    image: strDrinkThumb,
                    info: strAlcoholic,
                    glass: strGlass
                };
            });
            setModifiedCocktail(newCoctails);
        } else  {
            setModifiedCocktail([]);
        }
    }, [cocktails]);

    if(loading) {
        return (
            <div className="container" role="status">
                <span>Loading</span>
            </div>
        )
    }

    if(!cocktails) {
        return console.log("error");
    }

    return (
        <div className="container">
            <h1>The most popular coctails</h1>
            <div className="grid">
                {modifiedCocktail.map((item) => {
                    const {id, name, image, glass, info} = item;
                    return (

                        <div className="item" key={id}>
                                <div>
                                    <div className="img-box">
                                        <img src={image} alt={name} />
                                    </div>
                                    <div className="column">
                                        <div>
                                            <span className="bold">Name:</span>
                                            <span> {name}</span>
                                        </div>
                                        <div>
                                            <span className="bold">Glass:</span>
                                            <span> {glass}</span>
                                        </div>
                                        <div>
                                            <span className="bold">Type:</span>
                                            <span> {info}</span>
                                        </div>
                                        <Link to={`/cocktails/${id}`}>
                                            <button className="button">View</button>
                                        </Link>
                                    </div>
                                </div>
                        </div>
                    )

                })}
                </div>
        </div>
    );
}

export default CocktailList;