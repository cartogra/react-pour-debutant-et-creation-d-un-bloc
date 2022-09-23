import { Link } from "react-router-dom";

const NotFound = () => {
    return (  
        <div className="404">
            <h2>Ooooops.....</h2>
            <p>la page que vous essaye d'acceder n'exste pas</p>
            <Link to='/'>Aller a la page d'accueil.....</Link>

        </div>
    );
}
 
export default NotFound;