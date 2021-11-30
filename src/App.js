import { Route, Switch } from 'react-router-dom';
import MainPage from './pages/Main.page';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={MainPage} />
    </Switch>
  );
}

export default App;
