import React from 'react';
import './bannerPage.css';

const BannerPage = ({pageName}) => {
    return (
        <>
          <section className='page-banner'>
              <div className='container-fluid page-banner-inner'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-md-12'>
                                <h1><span>{pageName}</span></h1>
                            </div>
                        </div>
                    </div>
              </div>
          </section>
        </>
    )
}

export default BannerPage
