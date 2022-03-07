import React from 'react';
import './howToStart.css';
import StartSection from './StartSection';

const HowToStart = () => {
    const data = [ 
        {id:1,title:"Calculate Your Ideal Weight"},
        {id:2,title:"Choose Your Weight Loss Program"},
        {id:3,title:"Enjoy Your Perfect Fit Body"}
    ]
    return (
        <>
            <section className='how-to-start'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12 mt-lg-5 mt-2'>
                            <h5 className='mt-5'>How to start</h5>
                            <h1>It's easy to start today!</h1>
                        </div>
                        {
                            data.map((item)=>(
                                <StartSection key={item.id} {...item} />
                            ))
                        }
                        <div className='col-md-12 all-view'>
                            <p className='text-center'><button className='btn'>LET'S START TODAY!</button></p>
                        </div>
                    </div>
                </div>
            </section>  
        </>
    )
}

export default HowToStart;
