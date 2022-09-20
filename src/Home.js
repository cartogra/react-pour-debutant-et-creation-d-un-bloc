 
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {

const{data:blogs, isLoading, error} = useFetch('http://localhost:5500/src/data/db.json');
    return ( 
        <div className="home">
            {error && <div>{error}</div>}
            {isLoading && <div>En cour de traitement...</div>}
            {blogs && <BlogList blogs={blogs} title={'liste des blogs'}o/> }
             {/* <BlogList blogs={blogs.filter ((blog)  =>blog.author === 'christelle')} title={'liste des blogs publier par christelle'}/> */}
        </div>
     );
}
 
export default Home;