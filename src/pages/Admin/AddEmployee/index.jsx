import React from 'react';
import { Form,Formik } from 'formik';
import { FormSchema } from './validation/validation';
import style from './index.module.css';
import CustomInput from './CustomInput';
import CustomSelect from './CustomSelect';

const AdminAddEmployee = () => {

  function handleSubmit(values,actions){
    console.log(values);
    actions.resetForm();
}

  return (
    <Formik initialValues={{ fullName:'',age:'',salary:'',position:'' }} validationSchema={FormSchema} onSubmit={handleSubmit}>
      {(props)=>{
        return (
          <>
          <h1 className={style.titles}>Add Employee</h1>
          <Form className={style.form} onSubmit={props.handleSubmit}>
            <CustomInput style={{width:"100px",height:"30px",border:"none",outline:"none"}} label="fullName" name="fullName" type="text" placeholder="Full Name"/>
            <CustomInput style={{width:"100px",height:"30px",border:"none",outline:"none"}} label="age" name="age" type="number" placeholder="Age"/>
            <CustomInput style={{width:"100px",height:"30px",border:"none",outline:"none"}} label="salary" name="salary" type="number" placeholder="salary"/>
            <CustomSelect style={{width:"180px",height:"30px",outline:"none",marginRight:"10px"}} className={style.select} name="position" placeholder="position">
              <option value="">Select a Job Type</option>
              <option value="developer">Developer</option>
              <option value="designer">Designer</option>
              <option value="supervisor">Supervisor</option>
              <option value="manager">Manager</option>
              <option value="Engineer">Engineer</option>
            </CustomSelect>
            <button style={{width:"100px",height:"30px",border:"1px solid purple"}} disabled = {Object.keys(props.errors).length!==0 ? true : false} type='submit'>Submit</button>
          </Form>
          </>
        )
      }}
    </Formik>
  )
}

export default AdminAddEmployee