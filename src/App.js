import './App.css';
import Task from './components/Task';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import HomeComponent from './components/HomeComponent';
import BasicCalculator from './components/BasicCalculator';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductCart from './components/ProductCart';
import EnhanceTasks from './components/EnhanceTasks';
import ReactHookForm from './components/ReactHookForm';
import GameComponent from './components/GameComponent';
import Mailbox from './components/Mailbox';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomeComponent} />
        <Route exact path="/task" component={Task} />
        <Route exact path="/calculate" component={BasicCalculator} />
        <Route exact path="/product" component={ProductCart} />
        <Route exact path="/enhance" component={EnhanceTasks} />
        <Route exact path="/reacthookform" component={ReactHookForm} />
        <Route exact path="/game" component={GameComponent} />
        <Route exact path="/mailbox" component={Mailbox} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
