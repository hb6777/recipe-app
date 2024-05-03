import { useContext } from "react";
import { RecipeGlobalContext } from "../context";
import { Link } from "react-router-dom";  
import "../styles.css"
 
export default function RecipeItem({item}){
  
return( 
    <div className="recipe-item-container">
        <img className={"recipe-img"} src={item.image_url} title={item.title} />
        <p className="title-container" style={{fontWeight:'bold'}}>
            {item.title.substring(0,20) + "..."}
        </p>
        <div className="detail-btn" >
            <Link to={`/Details/${item?.id}`}>Recipe Details</Link> 
        </div> 
    </div> 
);

}


