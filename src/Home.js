 import { useEffect, useState } from "react";
import BlogList from "./BlogList";


const Home = () => {
   
const [blogs, setBlog] = useState([]);

useEffect( () => {
    fetch('http://localhost:5500/src/data/db.json')
     .then  ((response) => {

        return response.json();
    })
    .then ((data) => {
      console.log(data);    
      console.log(data['blogs']);    
       setBlog(data['blogs'])
        
   })

 }, [])


const handleDelete= (id) => {
    const newBlogs= blogs.filter( (blog) => blog.id !== id);
    setBlog(newBlogs);

    
 }
    return ( 
        <div className="home">
            {blogs && <BlogList blogs={blogs} title={'liste des blogs'} handleDelete={handleDelete}/> }
             {/* <BlogList blogs={blogs.filter ((blog)  =>blog.author === 'christelle')} title={'liste des blogs publier par christelle'}/> */}
        </div>
     );
}
 
export default Home;