import React, { useState, useEffect } from 'react'
import { v4 as uuid } from 'uuid'

const FormularioAdd = ({ dispatch, contactoEditar = null, setContactoEditar, onClose }) => {
  const [data, setData] = useState({ nombre: '', numero: '' })

  useEffect(() => {
    if (contactoEditar) {
      setData(contactoEditar)
    }
  }, [contactoEditar])

  const { nombre, numero } = data

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!nombre.trim() || !numero.trim()) return

    if (contactoEditar) {
      dispatch({ type: 'update', payload: { id: contactoEditar.id, data } })
      setContactoEditar(null)
    } else {
      dispatch({ type: 'add', payload: { id: uuid(), nombre, numero } })
    }
    setData({ nombre: '', numero: '' })
    if (onClose) onClose()
  }

  const isEditing = !!contactoEditar

  return (
    <div className="form-card" role="form" aria-label={isEditing ? 'Editar contacto' : 'Agregar contacto'}>
      <h2 className="form-card-title">
        <span>{isEditing ? '✏️' : '➕'}</span>
        {isEditing ? 'Editar contacto' : 'Nuevo contacto'}
      </h2>
      <form onSubmit={handleSubmit} noValidate>
        <div className="form-grid">
          <div className="form-group">
            <label className="form-label" htmlFor="nombre">
              Nombre y apellido
            </label>
            <input
              id="nombre"
              className="form-input"
              onChange={handleChange}
              name="nombre"
              type="text"
              value={nombre}
              placeholder="Ej. María García"
              autoComplete="off"
              required
            />
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="numero">
              Teléfono celular
            </label>
            <input
              id="numero"
              className="form-input"
              onChange={handleChange}
              name="numero"
              type="tel"
              value={numero}
              placeholder="Ej. +52 55 1234 5678"
              autoComplete="off"
              required
            />
          </div>
        </div>
        <div className="form-actions">
          <button
            id="btn-submit-contact"
            type="submit"
            className={`btn ${isEditing ? 'btn-warning' : 'btn-success'}`}
          >
            {isEditing ? '💾 Guardar cambios' : '✓ Agregar contacto'}
          </button>
          <button
            id="btn-cancel-form"
            type="button"
            className="btn btn-ghost"
            onClick={() => {
              setData({ nombre: '', numero: '' })
              if (isEditing) setContactoEditar(null)
              if (onClose) onClose()
            }}
          >
            Cancelar
          </button>
        </div>
      </form>
    </div>
  )
}

export default FormularioAdd
