import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const FoodListSkeleton = () => {
  return <SkeletonTheme baseColor = "#8c96ac" highlightColor = "#aaa">
    {Array.from({ length: 20 }).map(() => {
    return (
      <article className="food_card">
        <div className="img-box">
          <Skeleton height={200} />
        </div>
        <h4>
          <Skeleton />
        </h4>
        <div className="catagory">
          <Skeleton width={85} height={15} />
          <Skeleton width={85} height={15} />
        </div>
      </article>
    );
  })}
  </SkeletonTheme>
};

export default FoodListSkeleton;
