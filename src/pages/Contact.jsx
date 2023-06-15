import React from 'react'
import { toast } from 'react-toastify'


const Contact = () => {


  const handleSubmit = () => {
    e.preventDefault()
    toast("Save")
  }

  return (
    <>
      <div className="form-container">
        <div className="contact-us">
          <h1>Contact Us </h1>
          <p>Please fill this form in a decent manner</p>
        </div>
        <form className="contact-form" onSubmit={(e) => handleSubmit(e)}>
          <div className="mb-2 ">

            <label htmlFor="exampleInputEmail1" className="form-label">Full Name </label>
            <input type="text" className="form-control rounded-0 full-name"  />
           
          </div>

          <div className="mb-1 ">

            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" className="form-control rounded-0 email"/>
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>

          </div>
          <div className="mb-2 ">
          <label htmlFor="" className="form-label">Message</label>
            <textarea name="text" id="" cols="43" rows="4"></textarea>

          </div>

          <button className="btn form-submit ">Submit</button>

        </form>
      </div>
    </>
  )
}

export default Contact
