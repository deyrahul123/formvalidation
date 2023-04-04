import React from "react";
import "../styles/formInput.css";
const FormInputs = (props) => {
  return (
    <div className="formInput">
      <label></label>
      <input placeholder={props.placeholder} />
    </div>
  );
};

export default FormInputs;
