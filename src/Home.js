 import { useState } from "react";
import BlogList from "./BlogList";
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
  },

  {
    id:3,
    title: "je veux maitriser le code",
    body: "cursus vestibulum. mauris magna. duis dignissin temporq",
    author: "christelle",
    date: "19/09/2022"
  },
]);

    return ( 
        <div className="home">
           <BlogList blogs={blogs} title={'liste des blogs'}/>
           <BlogList blogs={blogs.filter ((blog)  =>blog.author === 'christelle')} title={'liste des blogs publier par christelle'}/>
        </div>
     );
}
 
export default Home;