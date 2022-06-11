import { useState } from 'react';
import { useRoutes } from 'react-router-dom';
import logo from './logo.svg';
// import './App.css';
import Loader from './pages/Loader';
import { routes } from './routes';

function App() {
  const routing = useRoutes(routes);

  const [loading, setLoading] = useState(true);
  useState(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, [])
  return loading ? (
    <Loader />
  ) : (
    routing
  );
}

export default App;
