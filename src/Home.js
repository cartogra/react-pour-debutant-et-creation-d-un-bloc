 import { useState } from "react";
const Home = () => {
   
const [blogs, setBlog] = useState([

  {
    id:1,
    title: "bienvenu a mon blog.",
    body: "a dui. cras pellentesque. sed dictum. proin eget odio", 
    author: "annie",
    date: "19/09/2022"
  },
  {
    id:2,
    title: "j'apprend a coder",
    body: "cursus vestibulum. mauris magna. duis dignissin temporq",
    author: "christelle",
    date: "19/09/2022"
  }
]);

    return ( 
        <div className="home">
            <div className="bloglist">
                {
                    blogs.map( (blog) => (
                    <div className="blog" key={blog.id}>
                        <a href="" className="blog-titre">{blog.title}</a>
                        <small className="blog-publication-date">publier le: {blog.date}</small>
                        <p className="blog-author">publire par: {blog.author}</p>
                    </div>

                    ))
                }
            </div>
            
        </div>
     );
}
 
export default Home;