import React from 'react'

const Footer = () => {
  return (
    <div>
      <nav className='navbar navbar-dark bg-dark '> 
        <div className='container-fluid'>
            <p className='navbar-brand h1'>
                {" "}
                Escobar - &copy; creado en {new Date().getFullYear()}{" "}
            </p>
        </div>
      </nav>  
    </div>
  )
}

export default Footer
