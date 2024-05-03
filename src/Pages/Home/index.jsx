import { useContext } from "react";
import { RecipeGlobalContext } from "../../context";
import RecipeItem from "../../recipe-item";
import "./styles.css"

export default function Home() {

    const { loading, recipeList } = useContext(RecipeGlobalContext);

    return (<div className="home-container"> 
        {
            loading ? <h1>Searching ... Please wait!</h1> : null
        } 
        { 
            recipeList && recipeList.length > 0 ? 
                recipeList.map((item) => (
                   <RecipeItem item={item} />
                )) 
            : (<h1>Nothing to show. Please search again.</h1>) 
        }
  
    </div>);
}




