import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { login } from "../../redux/actions/User";
import "./index.scss";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loginSuccess, setLoginSuccess] = useState(false);
  const dispatch = useDispatch();

  const handleLogin = (props) => {
    if (username === "") {
      setError("Please fill username");
      setTimeout(() => {
        setError("");
      }, 3000);
    } else if (password === "") {
      setError("Please fill password");
      setTimeout(() => {
        setError("");
      }, 3000);
    } else {
      dispatch(login(username, password))
        .then(() => {
          setLoginSuccess(true);
        })
        .catch(() => {});
    }
  };

  if (loginSuccess) {
    return <Redirect to="/notes" />;
  }

  return (
    <div className="d-flex flex-column col-3">
      <h3>Login</h3>
      {error && (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      )}
      <div className="d-flex flex-column">
        <input
          type="text"
          name="username"
          placeholder="Username"
          className="mb-2 form-control"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="mb-2 form-control"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="btn btn-primary" onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
