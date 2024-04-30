import React from 'react';
import { Link } from 'react-router-dom';

export default function Button({ btnstyle, btnstyle2, children, btnname, getinnowbutton, usercasebutton }) {
    return (
        // <button className={btnstyle ? "btn btn-primary btn-lg me-2 rounded-pill px-4" : btnstyle2 ?  "btn btn-primary btn-lg bg-transparent text-black rounded-pill px-4 fs-5" : ""}>
        //     {btnname}
        // </button>
        <div className={btnstyle ? 'product-button' : getinnowbutton ? "btn-shadow" : usercasebutton ? "usercasebutton" : "banner-btn "}>
              <Link to="#">
                <button className="btn">{btnname}</button>
            </Link>  
        </div>
    );
}
