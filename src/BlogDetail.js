import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetail = () => {
    const {id} = useParams();
const{data:blog, isLoading, error} = useFetch('http://localhost:5500/src/data/db.json');


    return ( 
        <div className="blog">
           {isLoading && <div>en cour de traitement...</div>}
           {error && <div>{error}</div>}
           {error && <div>{error}</div>}
          
            {blog[id-1] &&<div>
                <h1 className="blog-titre{">{blog[id-1].title}</h1>
                <p className="blog-publication-date">{`pulier le: ${blog[id-1].date}`}</p>
                <p className="blog-body">{blog[id-1].body}</p>
                <p className="blog-author">{`publier par: ${blog[id-1].author}`}</p>
                
            </div>}
        </div>
     );
}
 
export default BlogDetail; 