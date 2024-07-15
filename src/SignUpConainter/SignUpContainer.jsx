import { FaFacebook, FaLinkedinIn } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import './SignUpContainer.css'
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";


function SignUpContainer() {

  const [user, setUser] = useState({email: '', password: ''})
  
  const handleChange = (e) => {
    const {name, value} = e.target
    setUser({...user, [name]: value})
  }




  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({email: '', password: ''})
    createUserWithEmailAndPassword(auth, user.email, user.password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error);
      });
  };


  return (
    <div className="form-container signup-container">
        <form onSubmit={handleSubmit}>
            <h1>Create Account</h1>
            <div className="social-container">
                <a href="#" className="social"><FaFacebook/></a>
                <a href="#" className="social"><FaLinkedinIn/></a>
                <a href="#" className="social"><SiGmail/></a>
            </div>
            <span>or use your email for registration</span>
            <input type="email" name="email" placeholder="Email" onChange={handleChange} value={user.email} />
            <input type="password" name="password" placeholder="Password" onChange={handleChange} value={user.password} />
            <button type="submit">Sign Up</button>
        </form>
    </div>
  )
}

export default SignUpContainer