import React, { useState } from "react";

export default function LoginForm() {
  const [msg, setMsg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (!email || !password) setMsg("All fields are required!");
    else if (!/\S+@\S+\.\S+/.test(email)) setMsg("Enter a valid email!");
    else if (password.length < 6) setMsg("Password must be at least 6 characters!");
    else setMsg("Login Successful ✅");
  };

  return (
    <section id="login" className="login-form">
      <h1 className="text-2xl font-bold mb-4">Login Form</h1>
      <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
        <input name="email" type="email" placeholder="Enter Email" className="w-full p-2 mb-2 text-black" />
        <input name="password" type="password" placeholder="Enter Password" className="w-full p-2 mb-2 text-black" />
        <button className="bg-blue-500 px-4 py-2 rounded">Login</button>
        <p className="mt-2 text-red-200">{msg}</p>
      </form>
    </section>
  );
}