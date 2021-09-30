import './App.css';
import {GlobalStyle} from './GlobalStyle';
import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom';

// components 
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Movie from './components/Movie/Movie';

function App() {
  return (

    <Router>

      <Route exact path='/'>
        <Home />
      </Route>

      <Route exact path='/:movieId'>
        <Movie/>
      </Route>
      <GlobalStyle />
    </Router>
  );
}

export default App;
