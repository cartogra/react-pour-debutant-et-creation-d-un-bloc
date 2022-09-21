import {Link}  from 'react-router-dom';

const NavBar = () => {
    return (  
        <nav className="NavBar">
            <div>
                <Link className="logo" to="/">blog djougue</Link>
            </div>
            <ul className="liens">
                <li>
                    <Link to="/" className="lien">acceuill</Link>
                </li>
                <li>
                    <Link to="/Add" className="buttonArticle" >creer article</Link>
                </li>
                
            </ul>
        </nav>


    );
}
 
export default NavBar;