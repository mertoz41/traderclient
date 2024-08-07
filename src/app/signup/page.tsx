"use client";
import { FormEvent, ChangeEvent, useState } from "react";
import axios from "axios";
export default function Page() {
  const [signupInfo, setSignupInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  async function createUser(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    axios
      .post(
        "http://localhost:8000/trader/create_new_user",
        {
          user: signupInfo,
        },
        {
          headers: { "Content-Type": "application/json" },
        }
      )
      .then((resp) => {
        console.log(resp.data);
      });
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSignupInfo({
      ...signupInfo,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div>
      <h1>Hello, signup Page!</h1>
      <form onSubmit={createUser}>
        <input
          name="firstName"
          type="text"
          onChange={handleChange}
          placeholder="first name"
        />
        <input
          onChange={handleChange}
          name="lastName"
          placeholder="last name"
        />
        <input
          onChange={handleChange}
          type="email"
          name="email"
          placeholder="email"
        />
        <input
          onChange={handleChange}
          name="password"
          type="password"
          placeholder="password"
        />
        <button type="submit">sign up</button>
      </form>
    </div>
  );
}
