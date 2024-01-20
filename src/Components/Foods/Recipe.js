import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FoodContext } from "../../Context/FoodContext";

const Recipe = () => {
  // window.scroll(0,0);
  const [foodDetails, setFoodDetails] = useState(()=>{
    const recipe = localStorage.getItem("recipe")
    if(!recipe) {
      return {}
    }
    return JSON.parse(recipe);
  })
  const data = useContext(FoodContext);
  const param = useParams();

  useEffect(() => {
    // Find the specific recipe details in the context
    const currentFoodDetails = data.foodsData.find(
      (food) => food.idMeal === param.foodId
    );

    if (currentFoodDetails) {
      // Update local state and local storage if the data is found
      setFoodDetails(currentFoodDetails);
      localStorage.setItem("recipe", JSON.stringify(currentFoodDetails));
    }
  }, [data.foodsData, param.foodId]);
 
  if (!foodDetails) {
    // Handle the case where the specific recipe details are not available in the context
    return (
      <div className="recipe">
        <div className="notFound">Recipe details not found</div>;
      </div>
    );
  }

  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = foodDetails[`strIngredient${i}`];
    const measurement = foodDetails[`strMeasure${i}`];

    // Stop processing when no more ingredients are found
    if (!ingredient) {
      break;
    }

    ingredients.push(`${measurement} ${ingredient}`);
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
          <p>
            <strong>Food : </strong>
            {foodDetails.strMeal}
          </p>
          <p>
            <strong>Category : </strong>
            {foodDetails.strCategory}
          </p>
          <p>
            <strong>Origin : </strong>
            {foodDetails.strArea}
          </p>
          <p>
            <strong>Tags : </strong>
            {foodDetails.strTags}
          </p>
          <p>
            <strong>Video : </strong>
            <a
              href={foodDetails.strYoutube}
              target="_blank"
              rel="noopener noreferrer"
            >
              Youtube
            </a>
          </p>
          <p>
            <strong>Ingredient : </strong>
            {ingredients.join()}
          </p>
          <p>
            <strong>Instructions : </strong>
            {foodDetails.strInstructions}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
