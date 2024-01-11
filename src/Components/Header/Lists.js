import React from "react";
import { Link } from "react-router-dom";
import {nanoid} from 'nanoid'

const Lists = ( {listItem, func, currentPage}) => {
  return (
    <div className="nav-menu">
      <ul>
        {listItem.map((item) => {
          return (
            <li key={nanoid()} onClick={() => func(item.title)}>
              <Link
                to={item.path}
                style={{
                  color:
                    item.title === currentPage ? "rgb(59, 130, 246)" : "#fff",
                }}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Lists;
