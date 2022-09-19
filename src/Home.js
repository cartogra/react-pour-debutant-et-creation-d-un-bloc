 import { useState } from "react";
const Home = () => {
   
const[name, setName]= useState('annie')
const[age, setAge]= useState(20)

    const handleClick = () => {
       setName('christelle');
       setAge('30');
    };
    return ( 
        <div className="home">
            <h1>notre page d'acceuill</h1>
            <p>{name} a {age} ans</p>
            <button onClick={ (e) => handleClick()}>clicker ici!</button>
            
            
        </div>
     );
}
 
export default Home;