import React from 'react'
import ContactDetails from '../component/contact/ContactDetails'
import ContactForm from '../component/contact/ContactForm'
import BannerPage from '../component/pageBanner/BannerPage'

const Contact = () => {
    return (
        <>
            <BannerPage pageName="our Contact"/>
            <ContactForm/>
            <ContactDetails/>
        </>
    )
}

export default Contact
