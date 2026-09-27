import React from 'react'

const TablaContactos = ({ contactos = [], dispatch, setContactoEditar }) => {

  const handleDelete = (id) => {
    dispatch({ type: 'delete', payload: id })
  }

  const handleEdit = (contacto) => {
    setContactoEditar(contacto)
  }

  const getInitials = (nombre) => {
    if (!nombre) return '?'
    const parts = nombre.trim().split(' ')
    if (parts.length >= 2) return (parts[0][0] + parts[1][0]).toUpperCase()
    return parts[0][0].toUpperCase()
  }

  if (contactos.length === 0) {
    return (
      <div className="empty-state">
        <div className="empty-state-icon" aria-hidden="true">📭</div>
        <p className="empty-state-title">No hay contactos aún</p>
        <p className="empty-state-desc">Agrega tu primer contacto usando el botón de arriba.</p>
      </div>
    )
  }

  return (
    <div className="contacts-grid" role="region" aria-label="Lista de contactos">
      {contactos.map((contacto) => {
        const shortId = contacto.id.split('-')[0]
        return (
          <div className="contact-card" key={contacto.id}>
            <div className="contact-card-header">
              <div className="contact-avatar" aria-hidden="true">
                {getInitials(contacto.nombre)}
              </div>
              <div className="contact-info">
                <h3 className="contact-name">{contacto.nombre}</h3>
                <span className="contact-id">ID: {shortId}</span>
              </div>
            </div>
            
            <div className="contact-card-body">
              <div className="contact-phone">
                <span className="phone-icon" aria-hidden="true">📞</span>
                {contacto.numero}
              </div>
            </div>
            
            <div className="contact-card-footer actions-cell">
              <button
                id={`btn-edit-${shortId}`}
                onClick={() => handleEdit(contacto)}
                className="btn btn-warning"
                aria-label={`Editar ${contacto.nombre}`}
                title="Editar contacto"
              >
                ✏️ Editar
              </button>
              <button
                id={`btn-delete-${shortId}`}
                onClick={() => handleDelete(contacto.id)}
                className="btn btn-danger"
                aria-label={`Eliminar ${contacto.nombre}`}
                title="Eliminar contacto"
              >
                🗑 Eliminar
              </button>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default TablaContactos
