import React from 'react';
import './contactDetails.css';
import ContactSection from './ContactSection';

const ContactDetails = () => {
    const data = [
        {
            id:1,
            icon:"fa fa-map-marker",
            title:"HEAD OFFICE",
            first:"DHANTAK PLAZA, 203, 2ND FLOOR, MAKWANA RD, GAMDEVI, MAROL, ANDHERI EAST, MUMBAI, MAHARASHTRA 400059",
        },
        {
            id:2,
            icon:"fa fa-mobile",
            title:"CALL US",
            first:"+91 8976834831 / 32",
            second:"+91 8976834831 / 32",
            third:"+91 8976834831 / 32",
        },
        {
            id:3,
            icon:"fa fa-envelope-open-o",
            title:"MAIL US",
            first:"WeCare@GoldsGym.in",
            second:"WeCare@GoldsGym.in",
            third:"WeCare@GoldsGym.in",
        }
    ]
    return (
        <>
            <section className='contact-details'>
                <div className='container'>
                    <div className='row'>
                        {
                            data.map(item=>
                                (<ContactSection key={item.id} {...item} />)
                                )
                        }
                    </div>
                </div> 
            </section> 
        </>
    )
}

export default ContactDetails
