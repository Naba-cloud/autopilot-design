import React from "react";
import "./header.css";
export default function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light px-5 py-4">
        <a className="navbar-brand " href="#">
          Auto Pilot
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Your blog on auto pilot
              </a>
            </li>
            <li className="nav-item px-2">
              <a className="nav-link" href="#">
                blog auto pilot
              </a>
            </li>
            <li className="nav-item px-2">
              <a className="nav-link" href="#">
                SEO auto pilot
              </a>
            </li>
            <li className="nav-item px-2">
              <a className="nav-link" href="#">
                Process
              </a>
            </li>
            <li className="nav-item px-2">
              <a className="nav-link" href="#">
                FAQS
              </a>
            </li>
            <li className="nav-item px-2">
              <a className="nav-link" href="#">
                Orders
              </a>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto ">
            <li className="nav-item px-3">
              <a className="nav-link">Coupons</a>
            </li>
            <li className="nav-item px-3">
              <a className="nav-link">Chat now</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
