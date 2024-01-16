import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Lists = ({ listItem, func }) => {
  const navigate = useNavigate(); // Use the useNavigate hook

  return (
    <ul>
      {listItem.map((item) => {
        return (
          <Link key={item.title} to={item.path}>
            <li
              className={window.location.pathname === item.path ? "menu-active" : ""}
              onClick={() => {
                func(item.title);
                navigate(item.path); // Navigate to the clicked path
              }}
            >
              {item.title}
            </li>
          </Link>
        );
      })}
    </ul>
  );
};

export default Lists;
