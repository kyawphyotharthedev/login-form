import React from "react";
import "./login.css";

import LoginForm from "./LoginForm";
import LoginBg from "./LoginBg";

const Login = () => {
  return (
    <div className="custom-bg h-screen">
      <LoginBg />
      <LoginForm />
    </div>
  );
};

export default Login;
