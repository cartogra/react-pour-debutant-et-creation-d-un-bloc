
import './App.css';
import NavBar from './NavBar';
import Home from './Home';
// import {browserRouter as router, Route, Switch} from 'react-router-dom';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Add from './Add';
import BlogDetail from './BlogDetail';
import NotFound from  './NotFound';
function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <NavBar/>
        <div className='contenu'>
       
              <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/Add" element={<Add />}/>
                <Route path="/blogs/:id" element={<BlogDetail />}/>
                <Route path="*" element={<NotFound />}/>
              </Routes>
         
        </div>
      </div>
      </BrowserRouter>
   
  );
}

export default App;
