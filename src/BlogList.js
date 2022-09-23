import {Link}  from 'react-router-dom';

const BlogList = ({blogs, title, handleDelete}) => {
        
    
    return ( 

        <div className="bloglist">
            <h3>{title}</h3>
        {
            blogs.map( (blog) => (
            <div className="blog" key= {blog.id}>
                <Link to={`/blogs/${blog.id}`} className="blog-titre">{blog.title}</Link>
                <small className="blog-publication-date">publier le: {blog.date}</small>
                <p className="blog-author">publire par: {blog.author}</p>
                <button onClick={() => handleDelete(blog.id)}>suprimer article</button>
            </div>

            ))
        }
    </div>
     );
}
 
export default BlogList;