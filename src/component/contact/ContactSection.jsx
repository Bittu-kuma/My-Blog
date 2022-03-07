import React,{useEffect} from 'react';
import './contactDetails.css';

const ContactSection = ({icon,title,first,second,third}) => {
    return (
        <>
            <div className='col-md-4 mt-5'>  
                <div className='contact-info'>
                    <h1 className='text-center text-white'><i class={icon} aria-hidden="true"></i></h1>
                    <h2 className='text-center'>{title}</h2>
                    <p className='text-center text-white mt-4'>{first}</p>
                    <p className='text-center text-white mt-4'>{second}</p>
                    <p className='text-center text-white mt-4'>{third}</p>
                    
                </div>
            </div>  
        </>
    )
}

export default ContactSection
