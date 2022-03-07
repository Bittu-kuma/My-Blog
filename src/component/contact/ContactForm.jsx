import React from 'react';
import './contactDetails.css';

const ContactForm = () => {

    return (
        <>
            <div className='container mt-5'>
                <div className='row'>
                    <div className='col-md-6'>
                        <div className='form'>
                            <form>
                                <div class="mb-3">
                                    <input type="text" class="form-control" placeholder='Enter Name' />
                                </div>
                                <div class="mb-3">
                                    <input type="email" class="form-control" placeholder='Enter Email' />
                                </div>
                                <div class="mb-3">
                                    <input type="text" class="form-control" placeholder='Enter Contact Number' />
                                </div>
                                <div class="mb-3">
                                    <input type="text" class="form-control" placeholder='Enter Subject' />
                                </div>
                                <div class="mb-3">
                                    <input type="text" class="form-control" placeholder='Enter Location' />
                                </div>
                                <button type="submit" class="btn">Submit</button>
                            </form>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className='maps'>
                       
                        </div>
                    </div>
                </div>
            </div>  
        </>
    )
}

export default ContactForm
