const BlogList = ({blogs, title}) => {
     
    return ( 

        <div className="bloglist">
            <h3>{title}</h3>
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
     );
}
 
export default BlogList;