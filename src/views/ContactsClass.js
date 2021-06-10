import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addContact, removeContact } from '../actions'
import { Link } from 'react-router-dom'

class ContactsClass extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      phone: '',
      address: ''
    }

    this.handleOnChange = this.handleOnChange.bind(this)
  }

  handleOnChange(e) {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    })
  }

  handleOnSubmit = (e) => {
    e.preventDefault()
    const { name, phone, address } = this.state
    this.props.addContact(name, phone, address)
    this.setState({
      name: '',
      phone: '',
      address: ''
    })
  }

  // esta funcion no requiere bindear
  // handleFlecha = (e) => {
  //   this.setState({
  //     ...this.state,
  //     [e.target.name]: e.target.value
  //   })
  // }

  render() {
    return (
      <div>
        <h1>Contactos Class</h1>
        <form onSubmit={this.handleOnSubmit}>
          <div>
            <label>
              Nombre:
            </label>
            <input name="name" value={this.state.name} onChange={this.handleOnChange} />
          </div>
          <div>
            <label>
              Teléfono:
            </label>
            <input name="phone" value={this.state.phone} onChange={this.handleOnChange} />
          </div>
          <div>
            <label>
              Dirección:
            </label>
            <input name="address" value={this.state.address} onChange={this.handleOnChange} />
          </div>
          <div>
            <input type="submit" />
          </div>
        </form>
        <ul>
          {
            this.props.contacts.map((contact) => 
              <li key={contact.id}>
                <Link to={`/contact/${contact.id}`}>{contact.name}</Link>
                <button onClick={() => this.props.removeContact(contact.id)}>Eliminar</button>
              </li>
            )
          }
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    contacts: state.contacts
  }
}

// function mapDispatchToProps(dispatch) {
//   return {
//     addContact: (name, phone, address) => dispatch(addContact(name, phone, address)),
//     removeContact: (id) => dispatch(removeContact(id))
//   }
// }

export default connect(mapStateToProps, { addContact, removeContact })(ContactsClass)