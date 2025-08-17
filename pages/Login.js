import React from "react";

function Login() {
  return (
    <div className="max-w-md mx-auto border p-4 rounded">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <form>
        <input type="email" placeholder="Email" className="w-full mb-2 p-2 border rounded"/>
        <input type="password" placeholder="Password" className="w-full mb-2 p-2 border rounded"/>
        <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded">Login</button>
      </form>
    </div>
  );
}

export default Login;
