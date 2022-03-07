import React from 'react';
import './banner.css';
import slider_frame from '../../images/slider-frame.png';
import owner_img from '../../images/slider4.png';

const Banner = () => {
    return (
        <>
            <section className='banner'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-7'>
                            <div className='content'>
                                <div className='content-img'>
                                    <img src={slider_frame} alt="slider-frame" />
                                </div>
                                <div className='content-text'>
                                    <h1>IMPOSSIBLE IS JUST A <span>OPTION</span></h1>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing 
                                        elit. Nemo eveniet, vitae incidunt possimus optio 
                                        excepturi corporis maiores fugit ab repellendus sit
                                        voluptatibus cumque minus? Voluptate dicta ex
                                        perferendis tempora commodi.
                                    </p>
                                    <button>READ MORE</button>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-5'>
                            <div className='owner-img'>
                                <img src={owner_img}  alt="Owner-img" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Banner
