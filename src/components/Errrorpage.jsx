import react from "react";
import { NavLink } from "react-router-dom";

const Errorpage = () => {
  return (
    <>
      <div className="notfound">
        <div className="notfound">
          <div className="notfoung-404">
            <h1>Error 404</h1>
          </div>
          <h2>SORRY PAGE NOT FOUND !!</h2>
          <p className="mb-5">
            The page you are looking for currently unavailable.
          </p>
          <NavLink to="/">Back to homwpage</NavLink>
        </div>
      </div>
    </>
  );
};
export default Errorpage;
