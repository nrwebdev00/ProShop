import React from 'react';
import { Container } from 'react-bootstrap';

//Components
import Header from './components/Header';
import Footer from './components/Footer';

//Pages
import HomePage from './Pages/HomePage';

const App = () =>{
  return(
    <>
      <Header />
      <main className='py-3'>
        <Container>
          <HomePage />
        </Container>
      </main>
      <Footer />
    </>
  )
}

export default App;