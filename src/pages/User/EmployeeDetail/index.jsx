import React, { useEffect, useState } from 'react';
import { getEmployeeById } from '../../../api/requests';
import { useParams } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
// import { getAllEmployee } from '../../../api/requests';
import style from './index.module.css';
import { Link } from 'react-router-dom';

const EmployeeDetail = () => {

    const{id} = useParams();
    const[employees,setEmployees] = useState({});

    console.log(id);
    useEffect(()=>{
        getEmployeeById(id)
        .then(data => {
            setEmployees(data);
        })
    },[id])

  return (
    <div className={style.details}>
      <h4 className={style.text_item}>Detail Page of {employees.name}</h4>
      <div>
             <Card key={employees.id} sx={{ width: 225,marginBottom:"20px"}}>
                <CardMedia
                  sx={{ height: 190 }}
                  image={employees.url}
                  title="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="span" component="div" sx={{color:"blue",fontSize:"12px"}}>
                    <li key={employees.id}><Link to={`${employees.id}`}>{employees.name}</Link></li>
                  </Typography>
                  <Typography variant="p" sx={{color:"black",fontSize:"12px"}}>
                    Position: {employees.position}
                  </Typography>
                  <Typography gutterBottom variant="span" component="div" sx={{color:"black",fontSize:"12px"}}>
                    Salary: {employees.salary}$
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" sx={{backgroundColor:"orange",color:"white",marginLeft:"140px",marginBottom:"10px"}}><FavoriteIcon/></Button>
                </CardActions>
              </Card>
      </div>
    </div>
  )
}

export default EmployeeDetail