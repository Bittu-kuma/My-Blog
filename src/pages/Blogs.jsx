import React from 'react';
import data from '../data';
import BlogList from '../component/listblog/BlogList';
import BannerPage from '../component/pageBanner/BannerPage';

const Blogs = () => {
    return (
        <>
            <BannerPage pageName="our blog"/>
            {data.map((item)=>
                <BlogList data={item}/>
            )}  
        </>
    )
}

export default Blogs
