import React from "react";
import "./ClientLogin.css";

const CustomerLoginPopup = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted");
  };

  return (
    <div className="form-box">
      <div className="form-tab">
        <p className="account-subtitle">Customer Login</p>

        <form
          action="https://dukan24h.com/c_login_process"
          method="post"
          onSubmit={handleSubmit}
        >
          <input
            type="hidden"
            name="_token"
            value="wF5pAWNlycWjH2o7iaq7pssjxGMOKBRCPSk7Cmlf"
          />
          <div className="form-group">
            <label htmlFor="singin-email">Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              id="singin-email"
              name="email"
            />
            <span className="text-danger"></span>
          </div>

          <div className="form-group">
            <label htmlFor="singin-password">Password </label>
            <input
              type="password"
              className="form-control"
              id="singin-password"
              name="password"
              placeholder="Password"
            />
            <span className="text-danger"></span>
          </div>

          <div className="form-footer">
            <button type="submit" className="btn btn-outline-primary-2">
              LOG IN
            </button>

            <a
              data-dismiss="modal"
              aria-label="Close"
              id="cust_btn_forget"
              href="#forget-modal-cust"
              data-toggle="modal"
              className="forgot-link"
            >
              Forgot Your Password?
            </a>
          </div>
        </form>

        <div className="row form-row social-login">
          <div className="col-12">
            <a
              href="https://dukan24h.com/gcustomer_login"
              className="btn btn-google btn-block"
            >
              <i className="icon-google-plus-g mr-2"></i> Login
            </a>
          </div>
        </div>

        <br />
        <div className="text-center dont-have">
          Don’t have an account?{" "}
          <a
            data-dismiss="modal"
            aria-label="Close"
            id="pop_reg"
            href="#registor_modal"
            data-toggle="modal"
            className="forgot-link"
          >
            Register
          </a>
        </div>
      </div>
    </div>
  );
};

export default CustomerLoginPopup;
