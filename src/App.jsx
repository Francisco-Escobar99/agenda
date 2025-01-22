import React from 'react'
import Header from './components/Header'
import Contactos from './components/Contactos';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className='d-flex flex-column min-vh-100'>
      <Header></Header>
      <main className='flex-grow-1'>
      <Contactos></Contactos>
      </main>
      <Footer ></Footer>
    </div>
  )
};

export default App
