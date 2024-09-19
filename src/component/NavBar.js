import { Divider } from "@chakra-ui/react";

import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li className={({ isActive }) => {
            return isActive ? "active-link" : "";
        }}>
          <NavLink to="/">Home</NavLink>
        </li>
        <Divider/>
        <li className={({ isActive }) => {
            return isActive ? "active-link" : "";
        }}>
          <NavLink to="/customers">Customers</NavLink>
        </li>
        <Divider/>
        <li className={({ isActive }) => {
            return isActive ? "active-link" : "";
        }}>
          <NavLink to="/dashboard">Dashboard</NavLink>
        </li>
        <Divider/>
      </ul>
    </nav>
  );
};

export default NavBar;