import { useContext } from "react";
import { RecipeGlobalContext } from "../context"; 
import { NavLink } from "react-router-dom"; 
import "../styles.css"

export default function NavigationHeader(){
// console.log('in header');

    const { searchParam, setSearchParam, handleSubmit  } = useContext(RecipeGlobalContext);
    
    return(<div className="nav-container">
                <h2 className="logo">FoodRecipe</h2>
                <form onSubmit={handleSubmit}>
                    <input className="search-bar" 
                        type="text"
                        name="search-recipe"
                        placeholder="Enter a food name ..."
                        value={searchParam}
                        onChange={(e)=>setSearchParam(e.target.value)} 
                    /> 
                </form> 
                <div className="nav-link-container">
                    <NavLink className={"nav-link"} to={"/"}>Home</NavLink> 
                    <NavLink className={"nav-link"}  to={"/Favorites"}>Favorites</NavLink> 
                </div> 
            </div>);
}




