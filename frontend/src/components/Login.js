// Login.js
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import "./Login.css";
import login_cat from "../assets/login_cat.svg";

export default function Login() {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const { login } = useAuth();
  const [seePassword, setSeePassword] = useState(false);

  const host = "https://mindfulpals-user-backend.onrender.com";

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`${host}/api/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
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
    <div className="glass-morphism-container-login">
      <div className="glass-morphism-form-login">
        <div className="glass-morphism-form-login-inside">
          <div className="login-head">
            <h1 className="form-head">Sign In</h1>
            <form action="submit" className="form-start" onSubmit={handleSubmit}>
              <div className="form-email">
                <label htmlFor="email" className="auth_label">
                  Email Address:
                </label>
                <br/>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="johndoe@email.com"
                  className="auth_input"
                  value={credentials.email}
                  onChange={onChange}
                />
              </div>

              <div className="form-pass">
                <label htmlFor="password" className="auth_label">
                  Password:
                </label>
                <br/>
                <input
                  type={seePassword ? "text" : "password"}
                  name="password"
                  id="password"
                  placeholder="*********"
                  className="auth_input"
                  value={credentials.password}
                  onChange={onChange}
                />

                {seePassword ? (
                  <FaRegEye
                    className="eye" onClick={() => {
                      setSeePassword(!seePassword);
                    }}
                  />
                ) : (
                  <FaRegEyeSlash
                  className="eye" onClick={() => {
                      setSeePassword(!seePassword);
                    }}
                  />
                )}
              </div>
              <br/>
              <button variant="primary" type="submit" className="submit">
                Submit
              </button>
            </form>
            <div className="login-link">
              <p>
                New Here?  <Link to="/signup"> Sign Up</Link>
              </p>
            </div>
          </div>
          <div><img src={login_cat} alt="Login_cat" height={"360px"}/></div>
        </div>
      </div>
    </div>
  );
}
