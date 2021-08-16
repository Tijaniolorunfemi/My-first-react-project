import './App.css';
import Field from './Field'
import {BrowserRouter as Router , Switch , Route } from 'react-router-dom'
import Page from './Page'
import CustomerForm from './Test'
import Test from './Test'
import Login from './New'

function App() {
  return (
    <div className="App">
      {/* <CustomerForm /> */}
      <Router>
        <Switch>

          <Route exact path="/" component={CustomerForm}/>
          <Route path="/test" component={Test}/>

        </Switch>
      </Router>
      {/* <Login /> */}
    </div>
  );
}

export default App;
