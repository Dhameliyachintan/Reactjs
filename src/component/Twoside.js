import React from 'react';
import leptopimage from '../assest/images/laptop.png';
import square1image from '../assest/images/img-square2.png';
import square2image from '../assest/images/img-square1.png';
import { featuresList, twosideContent } from '../constant';
import Feature from './Feature';
import Unique from './Unique';

export default function TwosideSection() {
    return (
        <div className='twoside-section'>
            <div className='section-wrapper'>
                <div className="container">
                    <div className="row">
                        <div className='col-md-6'>
                            <div className="twoside-text">
                                {twosideContent.map(item => (
                                    <div key={item.id}>
                                        <h4 className='fw-normal'>{item.title}</h4>
                                        <p>{item.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="twoside-image">
                                <img src={leptopimage} alt="" className='img-fluid' />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="unique-img">
                                <img src={square1image} alt="" className='img-fluid' />
                            </div>
                            <div className="unique-img-2">
                                <img src={square2image} alt="" className='img-fluid' />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="featurelist">
                                {/* {featuresList.map(feature => (
                                    <div key={feature.id}>
                                        <h3>{feature.title}</h3>
                                        <p>{feature.description}</p>
                                    </div>
                                ))} */}
                                <Feature h2heading="Unique Feature" h4heading="Mobile ready" paragraph="This is a placeholder text. Replace it with your awesome call to action text." unique/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
