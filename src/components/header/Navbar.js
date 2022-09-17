import { signOut } from "firebase/auth";
import React from "react";
import { NavLink } from "react-router-dom";
import { auth } from "../../config/firebase-config";

const Navbar = () => {
  const logoutHandler = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <div className="navbarWrapper">
      <ul className="navLinkWrapper navLinkWrapperWeb">
        <div className="signIn navLinks">
          <li>
            <NavLink
              exact="true"
              onClick={logoutHandler}
              className={(navData) =>
                navData.isActive ? "activeLink" : "none"
              }
              to="/"
            >
              Log Out
            </NavLink>
          </li>
          {/* <li>
              <img
                style={{ width: "50px", height: "50px", borderRadius: "100%" }}
                src="https://picsum.photos/200/300"
                alt="error.png"
              />
            </li> */}
        </div>

        <div className="signOut navLinks">
          <li>
            <NavLink
              exact="true"
              className={(navData) =>
                navData.isActive ? "activeLink" : "none"
              }
              to="/login"
            >
              Login
            </NavLink>
          </li>
          <li>
            <NavLink
              exact="true"
              className={(navData) =>
                navData.isActive ? "activeLink" : "none"
              }
              to="/signup"
            >
              Sign Up
            </NavLink>
          </li>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
