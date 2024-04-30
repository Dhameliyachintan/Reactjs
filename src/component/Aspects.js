import React from 'react'
import Modarn from './Modarn'

export default function Aspects({ h2heading, paragraph, aspectsprops }) {
    return (
        <div className='landing-home'>
            <div className="container">
                <div className="aspect-h2 text-center">
                    <h2 className='text-white display-4'>{h2heading}</h2>
                    <p className='fs-6'>{paragraph}</p>
                </div>
                <div className="row">
                    <Modarn modarnprops />
                </div>
            </div>
        </div>
    )
}
