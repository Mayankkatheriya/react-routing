import React from "react";
import { Link } from "react-router-dom";
import { nanoid } from "nanoid";

const Lists = ({ listItem, func, currentPage }) => {
  return (
    <ul>
      {listItem.map((item) => {
        return (
          <Link
            key={nanoid()}
            to={item.path}
            style={{
              color: (item.title === currentPage) && "rgb(59, 130, 246)",
            }}
          >
            <li onClick={() => func(item.title)}>{item.title}</li>
          </Link>
        );
      })}
    </ul>
  );
};

export default Lists;
