import React from 'react'
// import { useParams } from 'react-router'

export default function Contact(props) {
  // const {id} = useParams()
  // console.log(id)
  return (
    <div>
      <span>{props.name}</span>
      <span>{props.phone}</span>
      <span>{props.address}</span>
    </div>
  )
}
