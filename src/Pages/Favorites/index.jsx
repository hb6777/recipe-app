import { useContext } from "react";
import { RecipeGlobalContext } from "../../context";
import RecipeItem from "../../recipe-item";
import "../../styles.css"

export default function Favorites() {

    const { favoritesBucket } = useContext(RecipeGlobalContext)

    return (<div className="home-container"> 
        {
            favoritesBucket && favoritesBucket.length > 0 ?
                favoritesBucket.map(item => (
                    <RecipeItem item={item} />
                ))
                :
                (<h1>Your Favorites Bucket is empty!</h1>)
        }
    </div>);
}




