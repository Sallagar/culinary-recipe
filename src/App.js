import { BrowserRouter as Routes, Route, Switch} from 'react-router-dom'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { NotFound } from './pages/NotFound';
import { Category } from './pages/Category';

function App() {
  return (
    <>
      <Routes>
        <Header />
        <main className='container content'>
          <Switch>
            <Route exact path='/' >
              <Home /> 
            </Route>
            <Route path='/about' component={ About }/> 
            <Route path='/contacts' component={ Contact }/>
            <Route path= '/category/:name' component={Category}/>
            <Route render={NotFound} />
          </Switch>
        </main>
        <Footer />
      </Routes>
    </>
  );
}

export default App;
