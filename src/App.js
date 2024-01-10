import './App.css';
import Footer from './components/UI/Footer/Footer';
import Navigation from './components/UI/navigation/Navigation';
import ScrollNavigation from './components/UI/scrollnav/ScrollNavigation';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {RouteInPages, IndividualPages } from './components/UI/router/index'

const App = () => {
  return (
    <div className="App">
      <Router>
          <Navigation />
          <ScrollNavigation />
        <Routes>
          {RouteInPages.map(route => 
            <Route key={route.path} path={route.path} element={<route.component />} exact={route.exact}/>  
          )}
        </Routes>


        <Routes>
          {IndividualPages.map(route => 
            <Route key={route.path} path={route.path} element={<route.component />} exact={route.exact}/>  
          )}

        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
