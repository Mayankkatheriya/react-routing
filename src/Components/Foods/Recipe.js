import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { FoodContext } from "../../Context/FoodContext";

const Recipe = () => {
  const data = useContext(FoodContext)
  const param = useParams();

  // // Find the specific recipe details in the context
  const foodDetails = data.foodsData.find((food) => food.idMeal === param.foodId);

  if (!foodDetails) {
    // Handle the case where the specific recipe details are not available in the context
    return (
      <div className="recipe">
        <div className='notFound'>Recipe details not found</div>;
      </div>
    )
  }

  return (
    <div className="recipe">
      <h1>
        Recipe of <span>{foodDetails.strMeal}</span>
      </h1>
      <div className="recipe-details">
        <div className="food-img">
          <img src={foodDetails.strMealThumb} alt="" />
        </div>
        <div className="requirements">
          <p><span>Food : </span>{foodDetails.strMeal}</p>
          <p><span>Category : </span>{foodDetails.strCategory}</p>
          <p><span>Origin : </span>{foodDetails.strArea}</p>
          <p><span>Video : </span><a href={foodDetails.strYoutube} target="_blank" rel="noopener noreferrer">Youtube</a></p>
          <p><span>Instructions : </span>{foodDetails.strInstructions}</p>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
