import React from 'react'

const TablaContactos = ({contactos = [], dispatch, setContactoEditar}) => {

    const handleDelete=(id)=>{
        console.log(id);
        const deleteAction ={
            type: "delete",
            payload: id
        }
        dispatch(deleteAction);
    };

    const handleEdit = (contacto) => {
        setContactoEditar(contacto);
      };
    

  return (
    <table className='table table-striped mb-5'>
        <thead>
            <tr>
                <th>ID</th>
                <th>Nombre y apellido</th>
                <th>Número Celular</th>
                <div className="d-flex gap-5">
                <th>Acción</th>
                <th>Acción</th>
                </div>                
      
            </tr>
        </thead>
        <tbody>
            {contactos.map((contacto) =>{

                const finalId = contacto.id.split("-");
                return <tr key={contacto.id}>
                <th>{finalId[0]}</th>
                <td>{contacto.nombre}</td>
                <td>{contacto.numero}</td>
                <td>
                <div className="d-flex gap-2">
                    <button onClick={() => handleDelete(contacto.id)} 
                    className='btn btn-danger'>Eliminar</button>
                    <button onClick={() => handleEdit(contacto)} className='btn btn-warning'>Actualizar</button>    
                </div>
                </td> 
           
               
                </tr>
            })
            }
        </tbody>
    </table>

  )
}

export default TablaContactos
