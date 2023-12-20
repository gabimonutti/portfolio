import { Route, Router, Switch } from 'wouter'
import './App.css'
import Home from './components/Home'

function App() {
  // useEffect(() => {
  //   const handlePopstate = () => {
  //     window.location.reload();
  //   };

  //   window.addEventListener('popstate', handlePopstate);

  //   return () => {
  //     window.removeEventListener('popstate', handlePopstate);
  //   };
  // }, []);

  return (
    <Router>
        <Switch>
          <Route component={Home} path="/" />
        </Switch>
    </Router>
  )
}

export default App
