import React from 'react';
import './bloglist.css';
import blogimg from '../../images/blog1.jpg';
import { Link, Outlet } from 'react-router-dom';
const BlogList = ({data}) => {
    
    return (
        <>
            <div className='container mt-5 mb-5'>
                <div className='row'>
                    <div className='col-md-8'>
                        <div className='bloglist'>
                            <div className='row'>
                                <div className='col-md-4'>
                                    <div className='bloglist-img'>
                                        <img src={data.img} alt="blog" />
                                    </div>
                                </div>
                                <div className='col-md-8'>
                                    <div className='bloglist-content'>
                                        <h6>{data.category}</h6>
                                        <h1>{data.title}</h1>
                                        <div>
                                            <span className='blog-write'>By: {data.by}</span>
                                            <span className='blog-date'>{data.date}</span>
                                        </div>
                                        <p>{data.details}</p>
                                        <button><Link to={`/blogs/${data.title.replace(/ /g,'-')}`} className="link">Lear More </Link></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4'></div>
                </div>
                <Outlet/>
            </div>
        </>
    )
}

export default BlogList
