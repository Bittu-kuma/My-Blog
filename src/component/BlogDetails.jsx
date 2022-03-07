import React from 'react';
import { useParams } from 'react-router-dom';

const BlogDetails = () => {
    const {blogid} = useParams();
    const head = blogid.replace(/-/g,' ');

    return (
        <>
            <div className='container mt-5'>
                <div className='row'>
                    <div className='col-md-12'>
                        <h1>URL Param is : {head}</h1>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet id tempora, deleniti sint voluptate aperiam placeat vitae? 
                            Nisi labore consequatur nemo ipsam totam magnam eligendi, repellendus, quidem tempora nihil corporis.</p>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet id tempora, deleniti sint voluptate aperiam placeat vitae? 
                            Nisi labore consequatur nemo ipsam totam magnam eligendi, repellendus, quidem tempora nihil corporis.</p>
                    </div>
                </div>
            </div>  
        </>
    )
}

export default BlogDetails
