import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const RecipeGlobalContext = createContext(null);

export default function RecipeGlobalState({ children }) {

    const [searchParam, setSearchParam] = useState('')
    const [loading, setloading] = useState(false)
    const [recipeList, setRecipeList] = useState([])
    const [recipeDetail, setRecipeDetail] = useState({})
    const [favoritesBucket, setFavoritesBucket] = useState([])

    const navigate = useNavigate();
 
    async function handleSubmit(event) {
        event.preventDefault();
      //  console.log(searchParam);
        setloading(true)

        try {
            const response = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParam}`);
            const returnedData = await response.json();
            //console.log(returnedData, 'returnedData')
            if (returnedData?.data?.recipes) {
                setRecipeList(returnedData?.data?.recipes)
              //  console.log(recipeList, 'search result')
                setloading(false)
                navigate('/')
            }
        } catch (e) {
            console.log(e);
            setloading(false)
        }
    }

    function handleAddToFavoriteBucket(getCurrentItem)
    {   
        console.log(getCurrentItem, 'handleAddToFavoriteBucket');

        let cpyFavoritesBucket = [...favoritesBucket];
        const checkID = cpyFavoritesBucket.findIndex((item)=> item.id === getCurrentItem.id)

        if (checkID === -1)
            {
                cpyFavoritesBucket.push(getCurrentItem);
            }else{
                cpyFavoritesBucket.splice(checkID); 
            }
            setFavoritesBucket(cpyFavoritesBucket)
            console.log(favoritesBucket, 'favoritesBucket');
    }


    return (
        <RecipeGlobalContext.Provider
            value={{
                searchParam,
                loading,
                recipeList,
                setSearchParam,
                handleSubmit,
                recipeDetail ,
                setRecipeDetail,
                favoritesBucket,
                handleAddToFavoriteBucket
            }}
        >
            {children}
        </RecipeGlobalContext.Provider>
    );

}
















