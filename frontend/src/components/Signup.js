// Signup.js
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import './Signup.css';
import login_cat from "../assets/login_cat.svg";

export default function Signup() {
  const [credentials, setCredentials] = React.useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });
  const navigate = useNavigate();
  const { login } = useAuth();
  const [seePassword, setSeePassword] = useState(false);
  const [seePasswordConfirm, setSeePasswordConfirm] = useState(false);

  const host = "http://localhost:5000";

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`${host}/api/auth/createuser`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: credentials.name,
        email: credentials.email,
        password: credentials.password,
      }),
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      localStorage.setItem("token", json.authtoken);
      login();
      navigate("/webcamcapture");
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div className="glass-morphism-container-sign">
      <div className="glass-morphism-form-sign">
        <div className="glass-morphism-form-sign-inside">
          <div className="sign-head">
            <h1 className="form-head-sign">Sign Up</h1>
            <form
              action="submit"
              className="form-start-sign"
              onSubmit={handleSubmit}
            >
              <div className="form-name-sign">
                <label htmlFor="name" className="auth_label-sign">
                  Name
                </label>
                <br />
                <input
                  type="text"
                  placeholder="Enter name"
                  name="name"
                  className="auth_input-sign"
                  onChange={onChange}
                  value={credentials.name}
                  minLength={3}
                  required
                />
              </div>
              <div className="form-email-sign">
                <label htmlFor="email" className="auth_label-sign">
                  Email Address:
                </label>
                <br />
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="johndoe@email.com"
                  className="auth_input-sign"
                  value={credentials.email}
                  onChange={onChange}
                />
              </div>
              <div className="form-pass-sign">
                <label htmlFor="password" className="auth_label-sign">
                  Password:
                </label>
                <br />
                <input
                  type={seePassword ? "text" : "password"}
                  name="password"
                  id="password"
                  placeholder="*********"
                  className="auth_input-sign"
                  value={credentials.password}
                  onChange={onChange}
                />

                {seePassword ? (
                  <FaRegEye
                    className="eye"
                    onClick={() => {
                      setSeePassword(!seePassword);
                    }}
                  />
                ) : (
                  <FaRegEyeSlash
                    className="eye"
                    onClick={() => {
                      setSeePassword(!seePassword);
                    }}
                  />
                )}
              </div>
              <div className="form-pass1-sign">
                <label htmlFor="passwordconfirm" className="auth_label-sign">
                  Confirm Password:
                </label>
                <br />
                <input
                  type={seePasswordConfirm ? "text" : "password"}
                  name="passwordConfirm"
                  id="passwordConfirm"
                  placeholder="*********"
                  className="auth_input-sign"
                  value={credentials.passwordConfirm}
                  onChange={onChange}
                />

                {seePasswordConfirm ? (
                  <FaRegEye
                    className="eye"
                    onClick={() => {
                      setSeePasswordConfirm(!seePasswordConfirm);
                    }}
                  />
                ) : (
                  <FaRegEyeSlash
                    className="eye"
                    onClick={() => {
                      setSeePasswordConfirm(!seePasswordConfirm);
                    }}
                  />
                )}
              </div>
                <br/>
              <button variant="primary" type="submit" className="submit-sign">
                Submit
              </button>
            </form>
            <div className="login-link">
              <p>
                Already Registered? <Link to="/login">Login</Link>
              </p>
            </div>
          </div>
          <div>
            <img src={login_cat} alt="Login_cat" height={"360px"} />
          </div>
        </div>
      </div>
    </div>
  );
}
