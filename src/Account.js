import React from 'react';
import './acount.css';

const Account = () => {
  return (
    <>
    <div class="container">
        <form class="signup-form">
            <h1>Create an Account</h1>
            <input type="text" placeholder="Full Name" required />
            <input type="email" placeholder="Email Address" required/>
            <input type="password" placeholder="Password" required/>
            <button type="submit">Sign Up</button>
            <p>Already have an account? <a>Log In</a></p>
        </form>
    </div>
    </>
  )
}

export default Account