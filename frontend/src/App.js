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
import ProfilePage from './Pages/ProfilePage';
import ShippingPage from './Pages/ShippingPage';
import PaymentPage from './Pages/PaymentPage';
import PlaceOrderPage from './Pages/PlaceOrderPage';
import OrderPage from './Pages/OrderPage';
import UserListPage from './Pages/UserListPage';
import UserEditPage from './Pages/UserEditPage';
import ProductListPage from './Pages/ProductListPage';

const App = () =>{
  return(
    <>
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
         <Route path='/product/:id' component={ProductPage} />
         <Route path='/order/:id' component={OrderPage} />
         <Route path='/placeorder' component={PlaceOrderPage} />
         <Route path='/payment' component={PaymentPage} />
         <Route path='/shipping' component={ShippingPage} />
         <Route path='/cart/:id?' component={CartPage} />
         <Route path='/login' component={LoginPage} />
         <Route path='/register' component={RegisterPage} />
         <Route path='/profile' component={ProfilePage} />
         <Route path='/admin/user/:id/edit' component={UserEditPage} />
         <Route path='/admin/userlist' component={UserListPage} />
         <Route path='/admin/productlist' component={ProductListPage} />
         <Route path='/' component={HomePage} exact />
        </Container>
      </main>
      <Footer />
    </Router>
    </>
  )
}

export default App;