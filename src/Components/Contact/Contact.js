import './Contact.css'
import React from 'react'
import data from './ContactDetailsData'
import {nanoid} from 'nanoid'

const Contact = () => {
  return (
    <main className='contact'>
        <div className="contact-details">
          <div className="details">
            <h4>Contact Us</h4>
            <h1>GET IN TOUCH WITH US</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius tempor incididunt ut labore et dolore magna aliqua. Ut enim adiqua minim veniam quis nostrud exercitation ullamco</p>
            {
              data.map((item) => {
                return(
                  <div key={nanoid()} className="detail">
                    <div className="detail-icon">
                      {item.icon}
                    </div>
                    <div className="detail-text">
                      <h4>{item.title}</h4>
                      <p>{item.description}</p>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
        <div className="contact-form">
          <h1>Contact-form</h1>
        </div>
    </main>
  )
}

export default Contact
