import React, { useState } from "react";

const UserForm = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const createUser = (e) => {
    e.preventDefault();
    const newUser = { firstName, lastName, email, password, confirmPassword };
    console.log("Welcome", newUser);
  };

  return (
    <form onSubmit={createUser}>
      <div>
        <label>First Name: </label>
        <input
          value={firstName}
          type="text"
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>
      <div>
        <label>Last Name: </label>
        <input
          value={lastName}
          type="text"
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>
      <div>
        <label>Email Address: </label>
        <input
          value={email}
          type="text"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label>Password: </label>
        <input
          value={password}
          type="text"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>
        <label>Confirm Password: </label>
        <input
          type="text"
          onChange={(e) => setConfirmPassword(e.target.value)}
          value={confirmPassword}
        />
      </div>
      <input type="submit" value="Create User" />
      <div>
        <p>{firstName}</p>
        <p>{lastName}</p>
        <p>{email}</p>
        <p>{password}</p>
        <p>{confirmPassword}</p>
      </div>
    </form>
  );
};

export default UserForm;
