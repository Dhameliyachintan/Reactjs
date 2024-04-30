import React from 'react';
import Button from './Button';

export default function Banner({ heading, paragraph, imagecomponent }) {
    return (
        <div className='landing-home'>
            <div className='container'>
                <div className='row pt-5'>
                    <div className='col-lg-6'>
                        <h2 className="display-1 h2-class fw-bold text-white">{heading}</h2>
                        <p className="font-size-md paragraph text-white">{paragraph}</p>
                        <div className='d-flex'>
                            <Button btnname="Get it now" btnstyle />
                            <Button btnname="Features" />
                        </div>
                    </div>
                    <div className='col-lg-6'>
                        <div className='banner-image'>
                            <img src={imagecomponent} alt="#" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
