import React, { useState } from "react";

const FormPage = () => {
  const [item, setitem] = useState([]);
  const [name, setname] = useState("");
  const [lastname, setlastname] = useState("");
  const [email, setemail] = useState("");

  const handleclick = () => {
    if (name === "" && lastname === "" && email === "") {
      setemail([]);
    } else {
      setitem([...item, { name, lastname, email }]);
    }
  };

  return (
    <div className="formpage_container">
      <div className="formdiv">
        <input
          type="text"
          placeholder="enter name here"
          value={name}
          onChange={(e) => {
            setname(e.target.value);
          }}
        />

        <input
          type="text"
          placeholder="enter lastname here"
          value={lastname}
          onChange={(e) => {
            setlastname(e.target.value);
          }}
        />

        <input
          type="email"
          placeholder="email here"
          value={email}
          onChange={(e) => {
            setemail(e.target.value);
          }}
        />
        <button onClick={() => handleclick()}>Add Details</button>
      </div>

      <div className="showdetails">
        {item &&
          item.map((ele, index) => {
            return (
              <>
                <div key={index} className="details_container">
                  <p>Name: {ele.name}</p>
                  <p>Lastname: {ele.lastname}</p>
                  <p>Email: {ele.email}</p>
                </div>
              </>
            );
          })}
      </div>
    </div>
  );
};

export default FormPage;
