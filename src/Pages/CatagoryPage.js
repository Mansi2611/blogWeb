import React from 'react'
import Header from '../components/Header';
import Pagination from '../components/Pagination';
import Blogs from '../components/Blogs'
import { useLocation, useNavigate } from 'react-router-dom';

function CatagoryPage() {
  const navigation = useNavigate();
  const location= useLocation();
  const Category = location.pathname.split("/").at(-1);
  return (
    <div>
        <Header></Header>
        <div>
          <button
          onClick={()=> navigation(-1)}
          >Back</button>

          <h2>catagories <span>{Category}</span></h2>
        </div>
        <div>
        <Pagination></Pagination>
    <Blogs></Blogs>
        </div>
    </div>
   
  )
}

export default CatagoryPage
