import React, { useEffect, useState } from "react";
import { auth } from "../../config/firebase-config";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import "./signuup.css";

const SignUp = () => {
  const [input, setInput] = useState({
    username: "",
    password: "",
    email: "",
  });
  const provider = new GoogleAuthProvider();
  const navigate = useNavigate();

  const inputChangeHandler__s1 = (event) => {
    setInput((prev) => {
      return {
        ...prev,
        [event.target.name]: event.target.value,
      };
    });
  };

  const signupHandler__s1 = async (event) => {
    event.preventDefault();
    console.log(input);
    await createUserWithEmailAndPassword(auth, input.email, input.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log("yeah!!!", user);
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  const signinWithGoogle = async (event) => {
    event.preventDefault();
    await signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        console.log(user);
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log(errorMessage);
      });
  };

  return (
    <div className="formWarpper SignupWrapper">
      <form onSubmit={signupHandler__s1}>
        <p>SignUp</p>
        <label className="labelname" htmlFor="username">Username</label>
        <input className="logininput"
          id="username"
          onChange={inputChangeHandler__s1}
          type="text"
          value={input.username}
          name="username"
          autoComplete="off"
          required
        />
        <label className="labelname" htmlFor="password">Password</label>
        <input className="logininput"
          id="password"
          onChange={inputChangeHandler__s1}
          type="password"
          value={input.password}
          name="password"
          autoComplete="off"
          required
        />
        <label className="labelname" htmlFor="email">E-Mail</label>
        <input className="logininput"
          id="email"
          onChange={inputChangeHandler__s1}
          type="email"
          value={input.email}
          name="email"
          autoComplete="off"
          required
        />

        <button className="submitbtn" type="submit">SignUp</button>
        {/* <Link to="/login">Already Registered? Login</Link> */}
      </form>
      <form onSubmit={signinWithGoogle}>
        <button className="submitbtn" type="submit">Google</button>
      </form>
    </div>
  );

  // <form onSubmit={signupHandler__s2}>
  //   <input type="file" onChange={inputChangeHandler__s2} />
  //   <img src={file} alt="error.png" />
  //   {/* <button type="submit">Prev</button> */}
  //   <button type="submit">SignUp</button>
  // </form>
};

export default SignUp;
