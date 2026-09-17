import React from 'react'

const Footer = () => {
  return (
    <footer className="app-footer">
      <div className="footer-inner">
        <span>Hecho por Escobar</span>
        <span className="footer-dot" aria-hidden="true"></span>
        <span>© {new Date().getFullYear()}</span>
        <span className="footer-dot" aria-hidden="true"></span>
        <span>Agenda de Contactos</span>
      </div>
    </footer>
  )
}

export default Footer
