import FlutterwaveNav from './FlutterwaveNav';
import PayStackNav from './PayStackNav';
import{ BrowserRouter as Router, Switch , Route } from 'react-router-dom'
import Test from './Flutter'


function App() {
  return (
    <div className="Ap">
      <Router>
        <Switch>
          <Route>
            {/* <FlutterwaveNav/> */}
            <PayStackNav/>
            {/* <Test /> */}
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
