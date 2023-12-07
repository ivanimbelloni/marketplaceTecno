import { addDoc, collection, doc } from 'firebase/firestore'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { db } from '../firebase/FireBase'
import { Link } from 'react-router-dom'

export const ContactoPage = () => {

  const [contactId, setContactId] = useState("")
  const {register, handleSubmit} = useForm()
  const send = (data)=>{
    const contact = {
      name: data.name,
      email: data.email,
      message: data.message
    }
    const orderRef = collection(db,"contacts")
    addDoc(orderRef,contact).then((doc)=>{
      setContactId(doc.id)
    })
  }

  if (contactId){
    return(
      <main>
        <div className="message">
          <h2>Mensaje enviado</h2>
          <div className="btn-inicio">
            <Link to={"/"} >Volver a inicio</Link>
          </div>
        </div>
      </main>
    )
  }
  return (
   <main>
    <div className="block-contacto">

      <h1>Contactanos</h1>
      <p>Dejanos tus datos o mandanos un correo</p>
      <form onSubmit={handleSubmit(send)} className="contact-form">
        
        <label htmlFor="input-name">Nombre Completo</label>
        <input id='input-name' required type="text" {...register("name")}/>  
        <label htmlFor="input-email">Correo</label>
        <input type="email" required id="input-mail" {...register("email")}/>
        <label htmlFor="input-message">Mensaje</label>
        <textarea  type="text" id='input-message' required {...register("message")}/>
      <button className='btn-enviar' le type='Submit'>Enviar</button>
      </form>
    </div>

   </main>
  )
}
