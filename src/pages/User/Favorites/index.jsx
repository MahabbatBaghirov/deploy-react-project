import Button from '@mui/material/Button';
import style from './index.module.css';
import { useFavorite } from '../../../contexts/FavoritesContext';
import { Table } from '@mui/material';

const Favorites = () => {

  const { favorites,setFavorites } = useFavorite();

  const deleteProd = (value) => {
    const newItems = favorites.filter((item) => item.id !== value.id)
    setFavorites(newItems);
  };

  const clearAll = () => {
    setFavorites([]);
  };

  const columns = [
    {
      title: 'ID',
      dataIndex: "id"
    },
      {
        title: 'Full Name',
        dataIndex: 'name',
        filters: favorites.map((employee)=>{
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
        render: (value)=> <img className={style.images} alt="" src={`${value.url}`} />
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
        render: (value)=> <Button onClick={()=>{deleteProd(value)}} variant="contained" style={{ background: "red", color:"white" }} className='btn'>Delete</Button>
      }
  ];

  return (
    <>
    <h4 className={style.employees_title}>Favourites</h4>
    <Button sx={{background:"white",color:"black",border:"1px solid blue",display:"block",margin:"0 auto"}} onClick={()=>{clearAll()}}>Clear All</Button>
    <Table style={{width:"90%",margin:"30px auto"}} columns={columns} dataSource={favorites} />
    </>
  )
}

export default Favorites