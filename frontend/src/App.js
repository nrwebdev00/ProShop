import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';

//Components
import Header from './components/Header';
import Footer from './components/Footer';

//Pages
import HomePage from './Pages/HomePage';
import ProductPage from './Pages/ProductPage';
import CartPage from './Pages/CartPage';
import LoginPage from './Pages/LoginPage';
import RegisterPage from './Pages/RegisterPage';

const App = () =>{
  return(
    <>
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
         <Route path='/product/:id' component={ProductPage} />
         <Route path='/cart/:id?' component={CartPage} />
         <Route path='/login' component={LoginPage} />
         <Route path='/register' component={RegisterPage} />
         <Route path='/' component={HomePage} exact />
        </Container>
      </main>
      <Footer />
    </Router>
    </>
  )
}

export default App;