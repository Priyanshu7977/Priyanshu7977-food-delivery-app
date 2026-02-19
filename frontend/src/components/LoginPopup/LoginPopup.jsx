import React, { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'

const LoginPopup = ({ setShowLogin, setUser }) => {

  const [currState, setCurrState] = useState("Login")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return regex.test(email)
  }

  const validatePassword = (password) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/
    return regex.test(password)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setError("")

    if (!validateEmail(email)) {
      setError("Please enter valid email")
      return
    }

    if (!validatePassword(password)) {
      setError("Password must be 8+ chars with uppercase, lowercase and number")
      return
    }

    if (currState === "Sign Up") {

      const userData = {
        name,
        email,
        password
      }

      localStorage.setItem("user", JSON.stringify(userData))

      alert("Account Created Successfully 🎉 Please Login Now")

      // 🔥 IMPORTANT CHANGE
      setCurrState("Login")   // Switch to login form
      setName("")
      setEmail("")
      setPassword("")
      return
    }

    // 🔐 LOGIN PART
    const savedUser = JSON.parse(localStorage.getItem("user"))

    if (!savedUser) {
      setError("No account found. Please Sign Up first.")
      return
    }

    if (savedUser.email !== email || savedUser.password !== password) {
      setError("Invalid email or password")
      return
    }

    setUser(savedUser.name)
    alert("Login Successful ✅")
    setShowLogin(false)
  }

  return (
    <div className='login-popup'>
      <form className="login-popup-container" onSubmit={handleSubmit}>
        
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="" />
        </div>

        <div className="login-popup-inputs">

          {currState === "Sign Up" && (
            <input
              type="text"
              placeholder="Your Name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          )}

          <input
            type="email"
            placeholder="Your Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {error && (
          <p style={{ color: "red", fontSize: "14px" }}>
            {error}
          </p>
        )}

        <button type="submit">
          {currState === "Sign Up" ? "Create Account" : "Login"}
        </button>

        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>

        {currState === "Login"
          ? <p>Create a new account? <span onClick={() => setCurrState("Sign Up")} >Click Here</span></p>
          : <p>Already have an account? <span onClick={() => setCurrState("Login")} >Login Here</span></p>
        }

      </form>
    </div>
  )
}

export default LoginPopup
