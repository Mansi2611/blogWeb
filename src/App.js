import "./App.css";
import { useContext, useEffect } from "react";
import { AppContext } from "./context/AppContext";

import Home from "./Pages/Home"
import BlogPage from "./Pages/BlogPage"
import CatagoryPage from "./Pages/CatagoryPage"
import TagPage from "./Pages/TagPage"
import { Route, Routes, useLocation, useParams } from "react-router-dom";
export default function App() {
  const { fetchBlogPost } = useContext(AppContext);
  const[searchParams,setSearchParams]=useParams();
  const location = useLocation();

  useEffect(() => {
    const page = searchParams("page")??1;

    if(location.pathname.includes("tags")){
      const tag = location.pathname.split("/").at(-1).replace("-"," ");
      fetchBlogPost(Number(page),tag)
    }else if(location.pathname.includes("category")){
      const category = location.pathname.split("/").at(-1).replace("-"," ");
      fetchBlogPost(Number(page),null,category)

    }else{
      fetchBlogPost(Number(page));

    }
  }, [location.pathname,location.search]);

  return (
    <>
     
      <Routes>
        <Route path="/" element={<Home></Home>}>Home</Route>
        <Route path="/blogs/:blogId" element={<BlogPage></BlogPage>}>Home</Route>
        <Route path="/tags/:tag" element={<TagPage></TagPage>}>Home</Route>
        <Route path="/catagories/catagory" element={<CatagoryPage></CatagoryPage>}>Home</Route>
      </Routes>
    </>
  );
}
