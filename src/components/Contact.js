import React from "react";

function Contact() {
  return (
    <div>
      <div className="field">
        <label className="label">Name</label>
        <div className="control">
          <input type="text" name="Name" value="" />
        </div>
      </div>

      <div className="field">
        <label className="label">Email</label>
        <div className="control">
          <input type="text" name="Email" value="" />
        </div>
      </div>

      <div className="field">
          <label className="label">Message</label>
          <div className="control">
            <textarea
              type="textarea"
              name="Message"
              rows="10"
              placeholder="Please Enter a Height"
            />
          </div>
        </div>
    </div>
  );
}

export default Contact;
