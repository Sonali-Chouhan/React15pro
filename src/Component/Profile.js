import React, { useState } from "react";

const Profile = () => {
  const [input, setInput] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setInput((pre) => ({
      ...pre,
      [name]: value,
    }));
    validateInput(e);
  };

  const validateInput = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setError((pre) => {
      const dataObject = { ...pre, [name]: "" };
      switch (name) {
        case "username":
          if (!value) {
            dataObject[name] = "Please enter Username.";
          }
          break;
        case "password":
          if (!value) {
            dataObject[name] = "Please enter Password.";
          } else if (input.confirmPassword && value !==input.confirmPassword) {
            dataObject["confirmPassword"] =
              "Password and confirmPassword not match";
          } else {
            dataObject["confirmPassword"] = input.confirmPassword
              ? ""
              : error.confirmPassword;
          }
          break;
        case "confirmPassword":
          if (!value) {
            dataObject[name] = "Please enter confirmPassword .";
          } else if (input.password && value !== input.password) {
            dataObject[name] = "Password and confirmPassword not match";
          }

          break;
        default:
          break;
      }
      return dataObject;
    });
  };
  

  return (
    <div>
      <h4>Password and Confirm Password validation in React</h4>
      <form>
        <input
          type="text"
          name="username"
          placeholder="Enter Username"
          value={input.username}
          onChange={onInputChange}
          onBlur={validateInput}
        ></input>
        <br />
        {error.username && <span className="err">{error.username}</span>}

        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={input.password}
          onChange={onInputChange}
          onBlur={validateInput}
        ></input>
        <br />
        {error.password && <span className="err">{error.password}</span>}

        <input
          type="password"
          name="confirmPassword"
          placeholder="Enter Confirm Password"
          value={input.confirmPassword}
          onChange={onInputChange}
          onBlur={validateInput}
        ></input>
        <br />
        {error.confirmPassword && (
          <span className="err">{error.confirmPassword}</span>
        )}

        <button>Submit</button>
      </form>
    </div>
  );
};

export default Profile;
