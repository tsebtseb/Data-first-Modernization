import Navbar from './Navbar';
import Home from './Home';
import Data from './Data';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Pipeline from './Pipeline';
import Dfirst from './Dfirst';
import Dgovern from './Dgovern';
import Dsecurity from './Dsecurity';
import { People } from './People';
import Quiz from './Quiz';
import Datahub from './Datahub';
import Strategy from './Strategy';
import Credit from './Credit';
import Hubtutor from './Hubtutor';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />           
            </Route>
            <Route path="/data">
              <Data />           
            </Route>
            <Route path="/pipeline">
              <Pipeline />           
            </Route>
            <Route path="/dfirst">
              <Dfirst />           
            </Route>
            <Route path="/dgovern">
              <Dgovern />           
            </Route>
            <Route path="/dsecurity">
              <Dsecurity />           
            </Route>
            <Route path="/people">
              <People />           
            </Route> 
            <Route path="/quiz">
              <Quiz />           
            </Route>
            <Route path="/datahub">
              <Datahub />           
            </Route>
            <Route path="/strategy">
              <Strategy />           
            </Route>
            <Route path="/credit">
              <Credit />           
            </Route>
            <Route path="/hubtutor">
              <Hubtutor />           
            </Route>
                           
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
