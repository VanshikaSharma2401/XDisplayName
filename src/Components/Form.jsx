import React, { useState } from "react";

function Form() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fullName, setFullName] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (firstName.trim() !== "" && lastName.trim() !== "") {
      setFullName(`${firstName} ${lastName}`);
      setIsSubmitted(true);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Last Name:
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </label>
        <br />
        <button type="submit" disabled={firstName.trim() === "" || lastName.trim() === ""}>
          Submit
        </button>
      </form>
      {isSubmitted && <p>Full Name: {fullName}</p>}
    </div>
  );
}

export default Form;
