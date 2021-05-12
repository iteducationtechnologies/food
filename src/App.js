import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './pages/header/Header';
import Home from './pages/main/Home';
import Footer from './pages/footer/Footer';
import About from './pages/main/About';
import Contacts from './pages/main/Contacts';
import NotFound from './pages/main/NotFound';
import Category from './pages/main/Category';
import Recipe from './pages/main/Recipe';

function App() {
  let text = {
    title: "Welcome to TheMealDB",
    description: "Welcome to TheMealDB: An open, crowd-sourced database of Recipes from around the world."
  }

  return (
    <>
      <Router>
        <Header />
        <main className="content">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about">
              <About text={text} />
            </Route>
            <Route path="/contacts" component={Contacts} />
            <Route path='/category/:name' component={Category} />
            <Route path="/meal/:id" component={Recipe} />
            <Route component={NotFound} />
          </Switch>
        </main>
        <Footer />
      </Router>
    </>
  );
}

export default App;
