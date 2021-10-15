import './App.css';
import Home from './views/Home';
import Navbar from './components/navbar/Navbar';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';


function App() {
  return (
    <Router>
     <main>
       <Navbar />
  
     <Switch>
       
        <Route path='/home' >
            <Home />
        </Route>

     </Switch>
     </main>
   </Router>
  );
}

export default App;
