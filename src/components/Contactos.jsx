import React, { useEffect, useReducer, useState } from 'react'
import TablaContactos from './TablaContactos'
import FormularioAdd from './FormularioAdd'
import { ContactosReducer } from '../reducers/ContactosReducer'

const init = () => {
  const contactos = localStorage.getItem('contactos')
  return contactos ? JSON.parse(contactos) : []
}

const Contactos = () => {
  const [state, dispatch] = useReducer(ContactosReducer, [], init)
  const [formView, setFormView] = useState(false)
  const [contactoEditar, setContactoEditar] = useState(null)

  // Sync state to localStorage
  useEffect(() => {
    localStorage.setItem('contactos', JSON.stringify(state))
  }, [state])

  // Open form when editing
  const handleSetContactoEditar = (contacto) => {
    setContactoEditar(contacto)
    setFormView(true)
  }

  const handleCloseForm = () => {
    setFormView(false)
    setContactoEditar(null)
  }

  return (
    <main className="main-content">
      <div className="container">

        {/* Section header */}
        <div className="section-header">
          <h2 className="section-title">Mis contactos</h2>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <span className="count-pill" aria-live="polite" aria-label={`${state.length} contactos`}>
              {state.length}
            </span>
            <button
              id="btn-toggle-form"
              onClick={() => {
                if (formView) {
                  handleCloseForm()
                } else {
                  setFormView(true)
                }
              }}
              className={`btn ${formView ? 'btn-ghost' : 'btn-primary'}`}
            >
              {formView ? '✕ Cerrar' : '+ Agregar contacto'}
            </button>
          </div>
        </div>

        {/* Form (animated in/out) */}
        {formView && (
          <FormularioAdd
            dispatch={dispatch}
            contactoEditar={contactoEditar}
            setContactoEditar={setContactoEditar}
            onClose={handleCloseForm}
          />
        )}

        {/* Contacts table */}
        <TablaContactos
          contactos={state}
          dispatch={dispatch}
          setContactoEditar={handleSetContactoEditar}
        />

      </div>
    </main>
  )
}

export default Contactos
