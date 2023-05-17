import React from 'react';
import style from './index.module.css';

const Home = () => {
  return (
    <div className={style.home}>
    <h4 className={style.title_text}>This is home page, nothing much in here...</h4>
    <img className={style.img} src="https://media.gq-magazine.co.uk/photos/63bd3fe7289a3155af7a277b/master/w_4000,h_2667,c_limit/GettyImages-1235215302.jpg" alt="" />
    </div>
  )
}

export default Home