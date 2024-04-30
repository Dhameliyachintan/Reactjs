import React from 'react'
import downloadimage from '../assest/images/download.svg';
import wrenchimage from '../assest/images/wrench-adjustable.svg';
import caretimage from '../assest/images/caret-down-square-fill.svg';
import Button from '../component/Button'

export default function Modarn({ h5heading, h2heading, paragraph, modarnprops }) {

    const data = [
        { image: downloadimage, heading: 'All in one package', paragraph: 'Landing page for app, product, event and business in the same package.' },
        { image: wrenchimage, heading: 'Clickable Item', paragraph: 'This panel is clickable. Just replace the href by your link.' },
        { image: caretimage, heading: 'Ready for Search Engine', paragraph: 'This is a placeholder text. Replace it with your awesome call to action text.' }
    ];

    return (
        <div className={modarnprops ? "modern-class" : "modern-section"}>
            <div className='container'>
                <div className='text-center'>
                    <h5>{h5heading}</h5>
                    <h2 className='display-4 display-title lh-sm'>{h2heading}</h2>
                    <p className='mx-auto mx-width'>{paragraph}</p>
                    <div className='d-flex justify-content-center gap-3'>
                        {data.map((item, index) => (
                            <div key={index} className='col-12 col-md-3'>
                                <div className={modarnprops ? "bg-transparent card-boxs" : "card mb-4 p-4"}>
                                    <div className={modarnprops ? "card-box" : "card-body p-0"}>
                                        <img src={item.image} className="card-img-top" alt="Card image" />
                                    </div>
                                    <div className='section-class'>
                                        <h4 className="card-title pb-3 pt-3 mb-0">{item.heading}</h4>
                                        <p className="card-text fs-6">{item.paragraph}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    {modarnprops ?
                        ""
                        :
                        <Button btnname="Get it now" getinnowbutton />
                    }
                </div>
            </div>
        </div >
    )
}
