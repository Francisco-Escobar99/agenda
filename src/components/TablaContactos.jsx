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
      <div className="table-wrapper">
        <div className="empty-state">
          <div className="empty-state-icon" aria-hidden="true">📭</div>
          <p className="empty-state-title">No hay contactos aún</p>
          <p className="empty-state-desc">Agrega tu primer contacto usando el botón de arriba.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="table-wrapper" role="region" aria-label="Lista de contactos">
      <table className="contacts-table" aria-label="Contactos">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Contacto</th>
            <th scope="col">Teléfono</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {contactos.map((contacto, index) => {
            const shortId = contacto.id.split('-')[0]
            return (
              <tr key={contacto.id}>
                <td>
                  <span className="id-badge" title={contacto.id}>{shortId}</span>
                </td>
                <td>
                  <div className="contact-name">
                    <div className="contact-avatar" aria-hidden="true">
                      {getInitials(contacto.nombre)}
                    </div>
                    {contacto.nombre}
                  </div>
                </td>
                <td>
                  <div className="contact-phone">
                    <span className="phone-icon" aria-hidden="true">📞</span>
                    {contacto.numero}
                  </div>
                </td>
                <td>
                  <div className="actions-cell">
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
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default TablaContactos
