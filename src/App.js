
import './App.css';

function App() {
const titre= 'bonjour le monde'
const contenu= 'contenu de la page'
const like= 150
  return (
    <div className="App">
      <div className='contenu'>
      
     <h1>{titre}</h1>
     <p>{contenu}</p>
     <p> { [1,2,3,4] }</p>
     <p> {Math.random() *10 }</p>
    </div>
    </div>
  );
}

export default App;
