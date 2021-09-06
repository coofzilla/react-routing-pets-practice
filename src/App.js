import HomePage from './pages/home';
import SearchPage from './pages/search';
import PetDetailsPage from './pages/detail';
import PetDetailsNotFound from './pages/petDetailsNotFound';
import Navigation from './components/navigation';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <Navigation />
        <Switch>
          <Route path="/:type/:id" component={PetDetailsPage} />
          <Route path="/:type?" component={HomePage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
