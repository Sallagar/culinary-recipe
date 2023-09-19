import {BrowserRouter as Routes, Route, Switch} from 'react-router-dom'
import {Header} from './components/Header'
import {Footer} from './components/Footer'
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { NotFound } from './pages/NotFound';

function App() {
  return (
    <>
      <Header />
      <main className='container content'>
        <Routes>
          <Switch>
            <Route exact path='/' render={ () => <Home /> }/>
            <Route path='/about' render={ () => <About /> }/> 
            <Route path='/contact' render={ () => <Contact /> }/>
            <Route render={NotFound} />
          </Switch>
        </Routes> 
      </main>
      <Footer />
    </>
  );
}

export default App;
