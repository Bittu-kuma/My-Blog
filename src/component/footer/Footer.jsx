import React from 'react';
import './footer.css';
import footer_logo from '../../images/logo.png';

const Footer = () => {
    return (
        <>
            <footer className='footer'>
                <div className='inner-footer'>
                    <div className='container pb-5'>
                        <div className='row'>
                            <div className='col-md-12'>
                                <div className='social-media'>
                                    <h3>Get in touch</h3>
                                    <ul>
                                        <li>
                                            <a href=""><i class="fa fa-facebook" aria-hidden="true"></i></a>
                                        </li>
                                        <li>
                                            <a href=""><i class="fa fa-twitter" aria-hidden="true"></i></a>
                                        </li>
                                        <li>
                                            <a href=""><i class="fa fa-youtube" aria-hidden="true"></i></a>
                                        </li>
                                        <li>
                                            <a href=""><i class="fa fa-pinterest-p" aria-hidden="true"></i></a>
                                        </li>
                                    </ul>
                                </div>
                                <hr className='footer-line'></hr>
                            </div>
                            <div className='col-md-4 mt-5'>
                                <div className='footer-logo'>
                                    <a href='#'>
                                        <img src={footer_logo} alt="Footer-logo" />
                                    </a>
                                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                        Iste non id at dolore cumque excepturi reiciendis? </p>
                                    <div className='privacy'>
                                        <a href='#'>Privacy Policy</a>
                                        <a href='#'>Terms of Use</a>
                                        <a href='#'>FAQ</a>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-4 mt-5'>
                                <div className='useful-link'>
                                    <h3>UseFul Link</h3>
                                    <ul>
                                        <li><a href='#'>Home</a></li>
                                        <li><a href='#'>About</a></li>
                                        <li><a href='#'>Blogs</a></li>
                                        <li><a href='#'>Gallery</a></li>
                                        <li><a href='#'>Contact</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className='col-md-4 mt-5'>
                                <div className='news-letter useful-link'>
                                    <h3>News Letter</h3>
                                    <p>Sign up for our mailing list to get latest updates and offers</p>
                                    <form>
                                        <div className='mb-4'>
                                            <input type="email" className='form-control' placeholder='E-mail'></input>
                                        </div>
                                        <button type="submit" class="btn">Submit</button>
                                    </form>
                                </div>
                            </div>  
                        </div>
                    </div>
                </div>
            </footer>  
        </>
    )
}

export default Footer;
