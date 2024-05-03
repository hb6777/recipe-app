import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { RecipeGlobalContext } from "../../context";
import RecipeItem from "../../recipe-item";


export default function Details() {

    const { id } = useParams();
    console.log(id, ' Details id :')

    const { recipeDetail, setRecipeDetail, favoritesBucket, handleAddToFavoriteBucket } = useContext(RecipeGlobalContext);

    async function getDetails() {

        try {
            const response = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${id}`)
            const detailData = await response.json();

            console.log(detailData, 'detailData')
            //console.log(detailData?.data?.recipe[0],'.recipe[0]')

            if (detailData?.data) {
                setRecipeDetail(detailData?.data)
            }

        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        getDetails()
    }, []);

    // console.log(recipeDetail, 'recipeDetail ? ');
    // console.log(favoritesBucket, 'favoritesBucket ? ');
    // console.log(recipeDetail?.recipe?.image_url, 'URL ? ');

    console.log(recipeDetail?.recipe?.ingredients);

    return (<div className="detail-home-container">  
   
        <div className="detail-item-container">  
            <h1>{recipeDetail?.recipe?.title}</h1>
            <img className="detail-img" src={recipeDetail?.recipe?.image_url} title={recipeDetail?.recipe?.title} />      
         
            <button className="add-favorite-btn"  onClick={() => handleAddToFavoriteBucket(recipeDetail?.recipe)}>
                {
                    favoritesBucket && favoritesBucket.findIndex((item) => item.id === recipeDetail?.recipe?.id) === -1 ?
                        "Add to Favorites"
                        : "Remove from Favorites"
                }
            </button> 
            <p>by <span style={{fontStyle:'italic'}}>{recipeDetail?.recipe?.publisher}</span></p>
            <p><h1>Ingredients:</h1></p>
            { 
                recipeDetail?.recipe?.ingredients.map((eachIngredient) =>
                    ( 
                        <p>{eachIngredient.quantity} {eachIngredient.unit} {eachIngredient.description}</p> 
                    )
                ) 
            }
            
            
        </div>
   
    </div>);
}




