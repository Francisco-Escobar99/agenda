import React, { useState, useEffect } from 'react'
import {v4 as uuid} from "uuid" //genera un id aleatorio

const FormularioAdd = ({dispatch, contactoEditar = null, setContactoEditar }) => {
  const [data, setData] = useState({nombre: "", numero: ""});

  useEffect(() => {
    if (contactoEditar) {
      setData(contactoEditar);
    }
  }, [contactoEditar]);

  const {nombre, numero} = data;

  const handleChange =(e) =>{
    setData({
      ...data,
      [e.target.name]:e.target.value
  })
  };

  const handleSubmit = () => {
    if (contactoEditar) {
      // Acción para actualizar
      dispatch({
        type: "update",
        payload: { id: contactoEditar.id, data }
      });
      setContactoEditar(null);
    } else {
      // Acción para agregar
      dispatch({
        type: "add",
        payload: {
          id: uuid(),
          nombre,
          numero,
        }
      });
    }

    setData({ nombre: '', numero: '' });
  };

  return (
    <>
    <div className='container'>
        <label className='mx-1 d-grid gap-2'>
            Nombre y primer apellido: {" "} 
            <input 
            onChange={handleChange} 
            name ="nombre" type='text'
            value={nombre} 
            className='form-control w-50' 
            autoComplete='off'></input>
        </label>
        <label className='mx-1 d-grid gap-2'>
            Telefono (celular): {" "} 
            <input onChange={handleChange}  
            name ="numero" type='text' 
            value={numero} 
            className='form-control w-50' 
            autoComplete='off'></input>
        </label>
        <div className='mx-1 d-grid gap-2'>
        <button onClick={handleSubmit} className='btn btn-info mt-3 mb-5' style={{ width: '150px' }}>
          {contactoEditar ? "Guardar cambio" : "Agregar"}
        </button>
      </div>
    </div>
    </>
  )
}

export default FormularioAdd;
