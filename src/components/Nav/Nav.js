import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Nav.module.scss";
import {token} from '../../redux/store'
const Nav = () => {
  return (
    <nav className={classes.Nav}>
      <span>Logo</span>
      {token.role === "company" ? (
        <ul>
          <li>
            <NavLink to="/catalog">Catalog</NavLink>
          </li>
          <li>
            <NavLink to="/orders">Orders</NavLink>
          </li>
          <li>
            <NavLink to="/busket">Busket</NavLink>
          </li>
          <li>
            <NavLink to="/auth">Login</NavLink>
          </li>
        </ul>
      ) : token.role === "owner" ? (
        <ul>
          <li>
            <NavLink to="/catalog">My products</NavLink>
          </li>
          <li>
            <NavLink to="/craete-product">New product</NavLink>
          </li>
          <li>
            <NavLink to="/orders">Requests</NavLink>
          </li>
          <li>
            <NavLink to="/auth">Login</NavLink>
          </li>
        </ul>
      ) : null}
    </nav>
  );
};

export default Nav;
