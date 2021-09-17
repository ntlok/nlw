import { BrowserRouter, Route } from 'react-router-dom'

import { Home } from './pages/Home';
import { CreatePoint } from './pages/CreatePoint';
import { SearchPoint } from './pages/SearchPoint';

import './styles/Main.scss';


function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home} />
      <Route path="/create-point" component={CreatePoint} />
      <Route path="/search-point" component={ SearchPoint} />
    </BrowserRouter>
  );
}

export default App;
