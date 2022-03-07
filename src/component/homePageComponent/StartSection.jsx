import React from 'react';
import './howToStart.css';

const StartSection = ({id,title}) => {
    return (
        <>
           <div className='col-md-4 startSection mt-lg-5 mt-3'>
                <h4 className='text-center'>{title}</h4>
                <h6><span>{id}</span></h6>
                <p>Step</p>
            </div> 
        </>
    )
}

export default StartSection
