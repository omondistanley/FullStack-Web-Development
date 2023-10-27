import React, { useCallback, useState } from "react";

function App() {
  //const [fName, setFName] = useState("");
  //const [lName, setLName] = useState("");

  const [fullName, setFullName] = useState({
    fName: "",
    lName: ""
  });
  /*function updateFName(event) {
    const firstName = event.target.value;
    setFName(firstName);
  }
  function updateLName(event) {
    const lastName = event.target.value;
    setLName(lastName);
  }*/
  function handleChange(event) {
    const newVal = event.target.value;
    const inputName = event.target.name;
    //console.log(newVal);
    //console.log(inputName);
    /*if (inputName == "fName") {
      setFullName({ fName: newVal });
    } else if (inputName == "lName") {
      setFullName({ lName: newVal });
    }*/
    setFullName((prevValue) => {
      //  {console.log(prevValue)});
      if (inputName === "fName") {
        return {
          fName: newVal,
          lName: prevValue.lName
        };
      } else if (inputName === "lName") {
        return {
          fName: prevValue.fName,
          lName: newVal
        };
      }
    });
  }
  return (
    <div className="container">
      <h1>
        Hello {fullName.fName} {fullName.lName}
      </h1>
      <form>
        <input
          name="fName"
          onChange={handleChange}
          placeholder="First Name"
          //value={fullName.fName}
        />
        <input
          name="lName"
          onChange={handleChange}
          placeholder="Last Name"
          // value={fullName.lName}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
