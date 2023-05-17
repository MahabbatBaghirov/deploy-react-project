import React, { useEffect, useState } from 'react';
import { Button, Table } from 'antd';
import { getAllEmployee } from '../../../api/requests';
import style from "./index.module.css";



const onChange = (pagination, filters, sorter, extra) => {
console.log('params', pagination, filters, sorter, extra);
};

const Grid = () => {

  const[employee,setEmployee] = useState([]);
    
      useEffect(()=>{
        getAllEmployee().then((data)=>{
            setEmployee(data);
          })
      },[setEmployee])
    
    const columns = [
      {
        title: 'ID',
        dataIndex: "id"
      },
        {
          title: 'Full Name',
          dataIndex: 'name',
          filters: employee.map((employee)=>{
            return {
                text: employee.name,
                value: employee.name
            }
          }),
          filterSearch: true,
          onFilter: (value, record) => record.name.includes(value),
          width: '15%',
          sorter: (a, b) => a.name.length - b.name.length,
          sortDirections: ['descend'],
        },
        {
          title: 'Image',
          render: (value)=> <img className={style.images} src={`${value.url}`} alt="" />
        },
        {
          title: 'Salary',
          dataIndex: 'salary',
          sorter: (a,b) => a.salary - b.salary
        },
        {
          title: 'Position',
          dataIndex: 'position',
        },
        {
          title: 'Delete',
          render: (value)=> <Button variant="contained" style={{ background: "red", color:"white" }} className='btn'>Delete</Button>
        },
        {
          title: 'Edit',
          render: (value)=> <Button variant="contained" type='primary' className='btn'>Edit</Button>
        }
      ];

  return (
    <>
    <Table className={style.table} columns={columns} dataSource={employee} onChange={onChange} />;
    </>
  )
}

export default Grid