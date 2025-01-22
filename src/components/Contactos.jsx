import React, { useEffect, useReducer, useState } from 'react'
import TablaContactos from './TablaContactos'
import FormularioAdd from './FormularioAdd';
import { ContactosReducer } from '../reducers/ContactosReducer';

const init = () =>{
  const contactos = localStorage.getItem("contactos");
  return contactos ? JSON.parse(contactos) : [];

};

const Contactos = () => {
  const [state, dispatch] =  useReducer(ContactosReducer, [], init)
  const [formView, setformView] = useState(false);
  const [contactoEditar, setContactoEditar] = useState(null);

  useEffect(() => {
    localStorage.setItem("contactos", JSON.stringify(state));
  }, [state]);

  

  return (
    <div className='container mt-3'>

      <button onClick={()=> setformView(!formView)}  className='btn btn-success mb-3 ms-3'>
        {formView ? "Cerrar formulario" : "Agregar contacto"}</button>

      {
        formView && <FormularioAdd 
        dispatch={dispatch}
        contactoEditar={contactoEditar}
        setContactoEditar={setContactoEditar}
        ></FormularioAdd>
      }
        <TablaContactos contactos={state} dispatch={dispatch} setContactoEditar={setContactoEditar}></TablaContactos>
    </div>
  )
};

export default Contactos
