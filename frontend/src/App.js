import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import BudgetList from './components/BudgetList';
import Budget from './components/Budget';

function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <div className="container-fluid">
        <Route path="/" exact component={BudgetList}></Route>
        <Route path="/budget" component={Budget}></Route>
      </div>
    </Router>
  );
}

export default App;