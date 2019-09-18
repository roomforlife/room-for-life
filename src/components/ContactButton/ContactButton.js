import React from 'react'
import { Link } from 'gatsby'
import button from './ContactButton.module.scss'

const ContactButton = () => (
    <Link to="/contact" className={button.button}>Bliv kontaktet af Joanna</Link>
)

export default ContactButton