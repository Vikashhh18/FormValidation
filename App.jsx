import React, { useState } from "react";

function App() {
  const [error, setError] = useState("");
  const [title, setTitle] = useState("Sign Up");

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    pass: "",
    conPass: "",
    user: "",
  });

  function onChangeHandler(e) {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function submitHandler(e) {
    e.preventDefault();
    if (form.user.length < 5) {
      setError("Username must be at least 5 characters long.");
      return;
    }
    if (form.pass.length < 7) {
      setError("Password must be at least 7 characters long.");
      return;
    }
    if (form.pass !== form.conPass) {
      setError("Passwords do not match.");
      return;
    }
    if (!/[!@#$%^&*()<>]/.test(form.pass)) {
      setError("Password must contain at least one special character.");
      return;
    }
    if (!/[A-Z]/.test(form.pass)) {
      setError("Password must contain at least one uppercase letter.");
      return;
    }
    setForm({
      fullName: "",
      email: "",
      pass: "",
      conPass: "",
      user: "",
    });
    setError("");
    alert("Form submitted successfully!");
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-xl w-96 p-8">
        <div className="flex justify-center gap-4 mb-6">
          <button
            className={`${
              title === "Login" ? "bg-indigo-600 text-white" : "bg-gray-200"
            } py-2 px-6 rounded-lg font-semibold`}
            onClick={() => setTitle("Login")}
          >
            Login
          </button>
          <button
            className={`${
              title === "Sign Up" ? "bg-indigo-600 text-white" : "bg-gray-200"
            } py-2 px-6 rounded-lg font-semibold`}
            onClick={() => setTitle("Sign Up")}
          >
            Sign Up
          </button>
        </div>
        <h2 className="text-2xl font-bold text-center mb-6">{title}</h2>
        <form className="flex flex-col" onSubmit={submitHandler}>
          {title === "Login" && (
            <input
              required
              value={form.user}
              name="user"
              onChange={onChangeHandler}
              className="border border-gray-300 w-full h-12 mb-4 p-4 rounded-lg focus:ring-2 focus:ring-indigo-500"
              type="text"
              placeholder="Enter your User id"
            />
          )}
          {title === "Sign Up" && (
            <input
              required
              value={form.fullName}
              name="fullName"
              onChange={onChangeHandler}
              className="border border-gray-300 w-full h-12 mb-4 p-4 rounded-lg focus:ring-2 focus:ring-indigo-500"
              type="text"
              placeholder="Enter your name"
            />
          )}
          {title === "Sign Up" && (
            <input
              required
              value={form.email}
              name="email"
              onChange={onChangeHandler}
              className="border border-gray-300 w-full h-12 mb-4 p-4 rounded-lg focus:ring-2 focus:ring-indigo-500"
              type="email"
              placeholder="Enter your email"
            />
          )}
          <input
            required
            value={form.pass}
            name="pass"
            onChange={onChangeHandler}
            className={`border w-full h-12 mb-4 p-4 rounded-lg focus:ring-2 ${
              error && !form.pass ? "border-red-500" : "border-gray-300"
            }`}
            type="password"
            placeholder="Enter your password"
          />
          <input
            required
            name="conPass"
            value={form.conPass}
            onChange={onChangeHandler}
            className={`border w-full h-12 mb-4 p-4 rounded-lg focus:ring-2 ${
              error && form.pass !== form.conPass
                ? "border-red-500"
                : "border-gray-300"
            }`}
            type="password"
            placeholder="Confirm your password"
          />
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
          <button
            type="submit"
            className="bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-6 rounded-lg text-xl font-semibold transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
