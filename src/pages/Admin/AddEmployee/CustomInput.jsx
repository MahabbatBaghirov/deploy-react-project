import { useField } from "formik";
import React from 'react';



const CustomInput = ({ label, ...props }) => {
    const[field,meta] = useField(props);
  return (
    <div className="checkbox">
        <input {...field} {...props} className={meta.touched && meta.error ? "input-error" : ""} />
        {meta.touched && meta.error && <div className="error" style={{color:"red"}}>{meta.error}</div> }
    </div>
  )
}

export default CustomInput