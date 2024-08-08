import React from "react";
import { Link } from "react-router-dom";

const Navbar = props => {
  return (
    <nav
      className={`navbar navbar-expand-lg  navbar-${props.mode} bg-${props.mode}`}
    >
      <div className="container">
        <Link className="navbar-brand" to="/">
          {props.title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mr-auto d-flex align-items-center">
            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                to="/Textform"
              >
                Textform
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Abouts">
                Abouts
              </Link>
            </li>
            <div className="d-flex">
              <div
                className="bg-primary rounded mx-2"
                onClick={() => props.togglemode("primary")}
                style={{ height: "30px", width: "30px" }}
              />
              <div
                className="bg-danger rounded mx-2"
                onClick={() => props.togglemode("danger")}
                style={{ height: "30px", width: "30px" }}
              />
              <div
                className="bg-success rounded mx-2"
                onClick={() => props.togglemode("success")}
                style={{ height: "30px", width: "30px" }}
              />
              <div
                className="bg-warning rounded mx-2"
                onClick={() => props.togglemode("warning")}
                style={{ height: "30px", width: "30px" }}
              />
               <div
                className="bg-light rounded mx-2"
                onClick={() => props.togglemode("light")}
                style={{ height: "30px", width: "30px" }}
              />
               <div
                className="bg-dark rounded mx-2"
                onClick={() => props.togglemode("dark")}
                style={{ height: "30px", width: "30px", border : "1px solid #fff" }}
              />
            </div>

            {/* <li className="nav-item">
                            <Link className="nav-link" to="/Features">Features</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">Contact</Link>
                        </li>
                        <li className="nav-item">F
                            <Link className="nav-link" to="/Forms">Forms</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Signup">SignupForm</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/color">color</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/ProductDetails">ProductDetails</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Productdetailsdata">Productdetailsdata</Link>
                        </li> */}

            {/* <button className='btn border-white btn-round'>Free Version</button> */}
            {/* <div
              className={`form-check form-switch text-${props.mode === "light"
                ? "dark"
                : "light"}`}
            >
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckChecked"
                onClick={() => props.togglemode(null)}
                defaultChecked
              />
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckChecked"
              >
                {props.mode === "dark" ? "dark" : "Light"}
              </label>
            </div> */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

// Navbar.propTypes ={
//   title : propTypes.string.isRequired
// }
