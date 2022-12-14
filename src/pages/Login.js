import React from "react";

const Login = () => {
  return (
    <div className="login">
      <h1 className="loginTitle">Choose your login</h1>
      <div className="wrapper">
        <div className="left">
          <div className="loginButton google">Google</div>
          <div className="loginButton facebook">Facebook</div>
          <div className="loginButton github">Github</div>
        </div>
        <div className="center">
            <div className="line"/>
            <div className="or">OR</div>
        </div>
        <div className="right">
          <input type="text" placeholder="Username" />
          <input type="text" placeholder="Password" />
          <button className="submit">Login</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
