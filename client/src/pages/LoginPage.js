import React from "react";

function LoginPage() {
  return (
    <form className="login">
      <h1>Login</h1>
      <input type="text" placeholder="UserName" />
      <input type="password" placeholder="Password" />
      <button>Login</button>
    </form>
  );
}

export default LoginPage;
