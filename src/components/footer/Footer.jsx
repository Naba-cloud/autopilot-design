import React from "react";
import "./footer.css";
import marketingIcon from "../../assets/marketing.svg";
export default function Footer() {
  return (
    <>
      <div className="container-fluid footer">
        <div className="row">
          <div className="col-lg-10 col-sm-12 col-xs-12 ">
            <div className="social-bg text-left">
              <h3 className="text-left">
                Social Media Management * blog topic suggestions
              </h3>
              <br />
            </div>
            <h1 className="outsource-text">OutSource</h1>
            <p className="fresh-sub-text">
              Fresh content posted weekly, to generate traffic
            </p>
          </div>
          <div className="col-lg-2 col-sm-12 col-sm-12 col-xs-12">
            <img className="like-img" src={marketingIcon} width={"230px"} />
          </div>
          <div className="like-img1">
            <img width={"300px"} src={marketingIcon} />
          </div>
        </div>
      </div>
    </>
  );
}
