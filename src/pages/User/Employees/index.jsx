import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import React, { useEffect, useState } from 'react'
import { getAllEmployee } from '../../../api/requests';
import style from './index.module.css';
import { Link } from 'react-router-dom';
import { useFavorite } from '../../../contexts/FavoritesContext';
import Helmet from 'helmet';


const Employees = () => {

    const {favorites,setFavorites} = useFavorite();
    const handleClick =(product)=> {
      setFavorites([...favorites,product]);
    }

    // const deleteProd = (product) => {
    //   const newItems = favorites.filter((item) => item.id !== product.id)
    //   setFavorites(newItems);
    // };

    const [products,setProducts] = useState([]);
    useEffect(()=>{
        getAllEmployee()
        .then(data => {
            setProducts(data);
        })
    },[])

  return (
    <>
    <Helmet>
    <title>Turbo Todo</title>
    <meta name="description" content="test on react-helmet" />
    <meta name="theme-color" content="#ccc" />
    </Helmet>
    <h4 className={style.employees_title}>Employees</h4>
    <div className={style.card}>

        {
            products && products.map((product)=>{
                return <Card key={product.id} sx={{ width: 225,marginBottom:"20px"}}>
                <CardMedia
                  sx={{ height: 190 }}
                  image={product.url}
                  title="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="span" component="div" sx={{color:"blue",fontSize:"12px"}}>
                    <li key={product.id}><Link to={`${product.id}`}>{product.name}</Link></li>
                  </Typography>
                  <Typography variant="p" sx={{color:"black",fontSize:"12px"}}>
                    Position: {product.position}
                  </Typography>
                  <Typography gutterBottom variant="span" component="div" sx={{color:"black",fontSize:"12px"}}>
                    Salary: {product.salary}$
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button onClick={()=>{handleClick(product)}} size="small" sx={{backgroundColor:"orange",color:"white",marginLeft:"140px",marginBottom:"10px"}}><FavoriteIcon/></Button>
                </CardActions>
              </Card>
            })
        }
    </div>
    </>
  )
}

export default Employees