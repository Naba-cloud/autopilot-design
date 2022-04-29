import React from "react";
import "./form.css";
export default function Form() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-6 col-lg-6 col-sm-12 mt-5">
            <h1 className="header-text mt-2" style={{ fontSize: "50px" }}>
              Get Your Blog On Auto Pilot
            </h1>
            <div className="row">
              <div className="col-lg-6 col-sm-12">
                <ul className="mt-5 form-list">
                  <li className="d-flex flex-row">
                    <span className="mx-3">
                      <i
                        className="fa fa-list-alt"
                        style={{ fontSize: "30px", color: "rgb(71,123,209)" }}
                      ></i>
                    </span>
                    Weekly Posting
                  </li>
                  <li className="d-flex flex-row">
                    <span className="mx-3">
                      <i
                        className="fa fa-list-alt"
                        style={{ fontSize: "30px", color: "rgb(71,123,209)" }}
                      ></i>
                    </span>
                    Weekly Posting
                  </li>{" "}
                  <li className="d-flex flex-row">
                    <span className="mx-3">
                      <i
                        className="fa fa-list-alt"
                        style={{ fontSize: "30px", color: "rgb(71,123,209)" }}
                      ></i>
                    </span>
                    Weekly Posting
                  </li>
                  <li className="d-flex flex-row">
                    <span className="mx-3">
                      <i
                        className="fa fa-list-alt"
                        style={{ fontSize: "30px", color: "rgb(71,123,209)" }}
                      ></i>
                    </span>
                    Weekly Posting
                  </li>
                  <li className="d-flex flex-row">
                    <span className="mx-3">
                      <i
                        className="fa fa-list-alt"
                        style={{ fontSize: "30px", color: "rgb(71,123,209)" }}
                      ></i>
                    </span>
                    Weekly Posting
                  </li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul className="mt-5 form-list">
                  <li className="d-flex flex-row">
                    <span className="mx-3">
                      <i
                        className="fa fa-list-alt"
                        style={{ fontSize: "30px", color: "rgb(71,123,209)" }}
                      ></i>
                    </span>
                    Weekly Posting
                  </li>
                  <li className="d-flex flex-row">
                    <span className="mx-3">
                      <i
                        className="fa fa-list-alt"
                        style={{ fontSize: "30px", color: "rgb(71,123,209)" }}
                      ></i>
                    </span>
                    Weekly Posting
                  </li>
                  <li className="d-flex flex-row">
                    <span className="mx-3">
                      <i
                        className="fa fa-list-alt"
                        style={{ fontSize: "30px", color: "rgb(71,123,209)" }}
                      ></i>
                    </span>
                    Weekly Posting
                  </li>
                  <li className="d-flex flex-row">
                    <span className="mx-3">
                      <i
                        className="fa fa-list-alt mt-n2"
                        style={{ fontSize: "30px", color: "rgb(71,123,209)" }}
                      ></i>
                    </span>
                    Weekly Posting
                  </li>
                  <li className="d-flex flex-row">
                    <span className="mx-3">
                      <i
                        className="fa fa-list-alt"
                        style={{ fontSize: "30px", color: "rgb(71,123,209)" }}
                      ></i>
                    </span>
                    Weekly Posting
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <form
              className="mt-3 py-4 px-5  shadow"
              style={{
                border: "1px solid rgb(242,242,242)",
                borderRadius: "20px",
              }}
            >
              <div className="form-group m-auto">
                <input
                  placeholder="Name"
                  type="text"
                  className="form-control input-form"
                />
              </div>
              <div className="form-group m-auto pt-3">
                <input
                  placeholder="Company"
                  type="text"
                  className="form-control input-form"
                />
              </div>
              <div className="form-group m-auto pt-3">
                <input
                  placeholder="Query"
                  type="text"
                  className="form-control input-form"
                />
              </div>
              <div className="form-group m-auto pt-3">
                <input
                  placeholder="Website "
                  type="text"
                  className="form-control input-form"
                />
              </div>
              <div className="form-group m-auto pt-3">
                <input
                  placeholder="Captcha"
                  type="text"
                  className="form-control input-form"
                />
              </div>

              <button type="submit" className="submit btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
