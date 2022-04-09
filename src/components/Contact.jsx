import userEvent from "@testing-library/user-event";
import React, { useState } from "react";

function Contact() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    message: "",
  });
  let name, value;
  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  };
  return (
    <>
      <div className="login-form">
        <h1>Contact Us</h1>
        <br />
        <p>Please fill the form in decent manner</p>

        <div>
          <form className="" id="contactform">
            <div>
              <label>
                <i>Full Name *</i>
              </label>
              <br />
              <input
                type="text"
                name="name"
                className=""
                id="name"
                autoComplete="off"
                value={userEvent.name}
                onChange={handleInputs}
              />
            </div>
            <br />

            <div>
              <label>
                <i>Email *</i>
              </label>
              <br />
              <input
                type="text"
                name="email"
                className=""
                id="email"
                autoComplete="off"
                value={userEvent.email}
                onChange={handleInputs}
              />
            </div>
            <br />

            <div>
              <label>
                <i>Message *</i>
              </label>
              <br />
              <input
                type="text"
                name="message"
                className=""
                id="message"
                autoComplete="off"
                value={userEvent.message}
                onChange={handleInputs}
              />
            </div>
            <br />

            <div class="">
              <input
                type="submit"
                name="submit"
                id="submit"
                class="btn btn-primary login-btn btn-block"
                value="submit"
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
