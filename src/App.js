import './App.css';
import Home from './views/Home';
import Service from './parts/services/Services';
import Navbar from './components/navbar/Navbar';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import TypesOfCar from './parts/typesOfCar/TypesOfCar';
import Gallery from './components/gallery/Gallery';
import WhyUs from './parts/whyUs/WhyUs';
import Contact from './parts/contact/Contact';
import Login from './views/login/Login';
import SignUp from './views/signUp/SignUp'


function App() {
  return (
    <Router>
     <main>
       <Navbar />
  
     <Switch>
       
        <Route exact path='/' >
            <Home />
        </Route>
        <Route path='/typesOfCar' >
            <TypesOfCar />
        </Route>
       
        <Route exact path='/service' component={Service} />
        <Route path='/Gallery' >
            <Gallery />
        </Route>
        <Route path='/WhyUs' >
            <WhyUs />
        </Route>
         <Route path='/Contact' >
            <Contact />
        </Route>
         <Route path='/Login' >
            <Login />
        </Route>
        <Route path='/SignUp' >
            <SignUp />
        </Route>
     </Switch>
     </main>
   </Router>
  );
}

export default App;
