import logo from './logo.svg';
import './App.css';
import {GlobalStyle} from './GlobalStyle';
import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom';

// components 
import Header from './components/Header/Header';

function App() {
  return (
    
    <Router>

      <Route exact path='/'>
        <Header />
      </Route>

      <GlobalStyle />
    </Router>
  );
}

export default App;
