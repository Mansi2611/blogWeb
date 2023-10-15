import React from 'react'
import Header from '../components/Header';
import Pagination from '../components/Pagination';
import Blogs from '../components/Blogs'
import { useLocation, useNavigate } from 'react-router-dom'

function TagPage() {
    const navigation = useNavigate();
    const location = useLocation()
    const tag =  location.pathname.split("/").at(-1);
  return (
    <div>
      <Header></Header>
      <div>
        <button
        onClick={()=>navigation(-1)}
        >Back</button>
        <h2>
            Blogs tags <span>#{tag}</span>
        </h2>
      </div>
      <Blogs />
        <Pagination />
    </div>
  )
}

export default TagPage
