import React, { useState } from "react";
import { NavLink } from "react-router-dom";
function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  let name, value;
  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  };
  return (
    <>
      <div className="wrapper fadeInDown">
        <div id="formContent">
          <h2 className="active"> Admin Only </h2>

          <div className="fadeIn first">
            <span>
              <i className="zmdi zmdi-account zmdi-hc-4x"></i>
            </span>
          </div>

          <form className="" id="login-form">
            <input
              type="email"
              id="email"
              className="fadeIn second"
              name="email"
              placeholder="Email"
              autoComplete="off"
              value={user.email}
              onChange={handleInputs}
            />
            <input
              type="password"
              id="password"
              className="fadeIn third"
              name="password"
              placeholder="password"
              autoComplete="off"
              value={user.password}
              onChange={handleInputs}
            />
            <input
              type="submit"
              name="login"
              id="login"
              className="fadeIn fourth"
              value="Log In"
            />
          </form>

          <div id="formFooter">
            <NavLink className="underlineHover" to="/contact">
              Or Contact Us !!
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
