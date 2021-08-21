import React from 'react';
import s from '../ContactList/ContactsList.module.css'

const ContactList = ({ contacts, onDeleteContact  }) => {
  return (
    <ul>
      {
        contacts.map(contact =>(
          <li className={s.item} key={contact.id}>
            {contact.name} : {contact.number}
            <button className={s.button}
              type='button'
              onClick={() => onDeleteContact(contact.id)} >
           
            Delete
</button>
      </li>
        ))
        
      }
    </ul>
  )
}

export default ContactList