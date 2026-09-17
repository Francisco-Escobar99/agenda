import React from 'react'

const Header = () => {
  return (
    <header className="app-header">
      <div className="header-inner">
        <div className="header-brand">
          <div className="header-icon" aria-hidden="true">📋</div>
          <div>
            <div className="header-title">Agenda</div>
            <div className="header-subtitle">Gestión de contactos</div>
          </div>
        </div>
        <span className="header-badge">v1.0</span>
      </div>
    </header>
  )
}

export default Header
