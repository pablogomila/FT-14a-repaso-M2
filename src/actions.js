export const ADD_CONTACT = 'ADD_CONTACT'
export const REMOVE_CONTACT = 'REMOVE_CONTACT'

/**
 * Esta función agrega un contacto a mi lista de contactos
 * @param {string} name es el nombre del contacto
 * @param {number} phone es el celular del contacto
 * @param {string} address es la dirección del contacto
 * @returns 
 */
export function addContact(name, phone, address) {
  return {
    type: ADD_CONTACT,
    payload: { name, phone, address }
  }
}

/**
 * Esta función elimina un contacto de mi lista de contactos
 * @param {number} id es el `id` del contacto
 * @returns 
 */
export function removeContact(id) {
  return {
    type: REMOVE_CONTACT,
    payload: id
  }
}
