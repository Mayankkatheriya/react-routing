import "./Foods.css";
import React, { memo, useContext, useEffect } from "react";
import axios from "axios";
import { FoodContext } from "../../Context/FoodContext";
import { Link } from "react-router-dom";

const Foods = () => {
  const data = useContext(FoodContext)

  const fetchApi = async () => {
    try {
      const response = await axios.get(
        "https://www.themealdb.com/api/json/v1/1/search.php?f=b"
      );
      data.setFoodsData(response.data.meals);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <main className="foods">
      { data.foodsData && 
        data.foodsData.map((food) =>{
          return(
            <article key={food.idMeal} className="food_card">
              <Link to={`/foods/${food.idMeal}`}><img src={food.strMealThumb} alt={food.strTags}/></Link>
              <h4 title={food.strMeal}>{food.strMeal}</h4>
              <div className="catagory">
                <p>{food.strCategory}</p>
                <button><Link to={`/foods/${food.idMeal}`}>View Recipe</Link></button>
              </div>
            </article>
          );
        })
      }
    </main>
  );
};

export default memo(Foods);
