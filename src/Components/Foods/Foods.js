import "./Foods.css";
import React, { memo, useContext, useEffect, useState } from "react";
import axios from "axios";
import { FoodContext } from "../../Context/FoodContext";
import { Link } from "react-router-dom";
import FoodListSkeleton from "./FoodListSkeleton";

const Foods = () => {
  window.scroll(0,0);
  const [isLoading, setLoading] = useState(true);
  const data = useContext(FoodContext);

  const fetchApi = async () => {
    try {
      const response = await axios.get(
        "https://www.themealdb.com/api/json/v1/1/search.php?f=c"
      );
      data.setFoodsData(response.data.meals);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      fetchApi();
    }, 1500);
  }, []);

  return (
    <main className="foods">
      {!isLoading ? (
        data.foodsData.map((food) => {
          return (
            <article key={food.idMeal} className="food_card">
              <Link to={`/foods/${food.idMeal}`}>
                <img src={food.strMealThumb} alt={food.strTags} />
              </Link>
              <h4 title={food.strMeal}>{food.strMeal}</h4>
              <div className="catagory">
                <p>{food.strCategory}</p>
                <button>
                  <Link to={`/foods/${food.idMeal}`}>View Recipe</Link>
                </button>
              </div>
            </article>
          );
        })
      ) : (
        <FoodListSkeleton />
      )}
    </main>
  );
};

export default memo(Foods);
