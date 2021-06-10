import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { addContact, removeContact } from '../actions'

export default function ContactsFunction(props) {
  const [state, setState] = useState({
    name: '',
    phone: '',
    address: ''
  })

  const contacts = useSelector(state => state.contacts)
  const dispatch = useDispatch()

  function handleOnChange(e) {
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
  }

  const handleOnSubmit = (e) => {
    e.preventDefault()
    const { name, phone, address } = state
    dispatch(addContact(name, phone, address))

    // Si no puedo usar los hooks uso el connect como esta en el de clases y llamo a ese dispatch desde las props
    // props.addContact(name, phone, address)

    setState({
      name: '',
      phone: '',
      address: ''
    })
  }

  // esta funcion no requiere bindear
  // handleFlecha = (e) => {
  //   setState({
  //     ...state,
  //     [e.target.name]: e.target.value
  //   })
  // }

  return (
    <div>
      <h1>Contactos Function</h1>
      <form onSubmit={handleOnSubmit}>
        <div>
          <label>
            Nombre:
            </label>
          <input name="name" value={state.name} onChange={handleOnChange} />
        </div>
        <div>
          <label>
            Teléfono:
            </label>
          <input name="phone" value={state.phone} onChange={handleOnChange} />
        </div>
        <div>
          <label>
            Dirección:
            </label>
          <input name="address" value={state.address} onChange={handleOnChange} />
        </div>
        <div>
          <input type="submit" />
        </div>
      </form>
      <ul>
          {
            contacts.map((contact) => 
              <li key={contact.id}>
                <Link to={`/contact/${contact.id}`}>{contact.name}</Link>
                <button onClick={() => dispatch(removeContact(contact.id))}>Eliminar</button>
              </li>
            )
          }
        </ul>
    </div>
  )
}
