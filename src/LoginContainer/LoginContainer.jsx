import { FaFacebook, FaLinkedinIn } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import "./LoginContainer.css";
import { useState } from "react";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

function LoginContainer() {
  const [user, setUser] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({email: '', password: ''})
    signInWithEmailAndPassword(auth, user.email, user.password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="form-container login-container">
      <form onSubmit={handleSubmit}>
        <h1>Sign In</h1>
        <div className="social-container">
          <a href="#" className="social">
            <FaFacebook />
          </a>
          <a href="#" className="social">
            <FaLinkedinIn />
          </a>
          <a href="#" className="social">
            <SiGmail />
          </a>
        </div>
        <span>or use your account</span>
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          value={user.email}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          value={user.password}
        />
        <button type="submit">Sign in</button>
      </form>
    </div>
  );
}

export default LoginContainer;
