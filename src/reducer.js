import { ADD_CONTACT, REMOVE_CONTACT } from './actions'

const initialState = {
  contacts: []
}

// const newState_1 = {
//   ...initialState,
// }

// initialState.contacts === newState_1.contacts => true

// const newState_2 = {
//   ...initialState,
//   contacts: [...initialState.contacts]
// }

// initialState.contacts === newState_2.contacts => false

let prevId = 0

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_CONTACT: return {
      ...state,
      contacts: [...state.contacts, {...action.payload, id: ++prevId}]
    }
    case REMOVE_CONTACT: return {
      ...state,
      contacts: state.contacts.filter((contact) => contact.id !== action.payload)
    }
    default: return state
  }
}