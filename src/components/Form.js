import "./FormStyles.css"
// import React, { useState } from 'react'


const Form = () => {
  
  return (
    <div className="form">
        <form action="https://formsubmit.co/monuparamesh@gmail.com" method="POST">

            <label>Your Name</label>
            <input type="text" name="name" pattern=".{5,}" title="Minimum 10 characters"  required></input>
            <label>Email</label>
            <input type="email" name="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2, 4}$" title="Match the email format" required></input>
            <label>Subject</label>
            <input type="text" name="subject"></input> 
            <label>Message</label>
            <textarea rows="6" placeholder="Type your message here" name="message"/>
            <button className="btn" type="sumbit">Sumbit</button>
      </form>
    </div>
  )
}

export default Form