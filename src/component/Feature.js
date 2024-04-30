import React from 'react'

export default function Feature({ h2heading, h4heading, paragraph, phoneimage, leptopimage, featuresection, usecaseprops, unique }) {
    return (
        <div className='container'>
            <div className={featuresection ? "row align-items-center flex-row-reverse second-component" : "row align-items-center second-component-1"}>
                <div className={unique ? "unique-main" : "col-md-6"}>
                    <div className={usecaseprops ? "usecase-menu" : unique ? "unique-part" : "feature-section"}>
                        <h2 className={featuresection ? 'display-4' : 'display-4'}>{h2heading}</h2>
                        {unique ?
                            ""
                            : <h4 className={usecaseprops ? 'fw-normal border-primary' : 'fw-normal border-primary'}>{h4heading}</h4>
                        }
                        <p>{paragraph}</p>
                    </div>
                </div>
                <div className="col-md-6 center-vh">
                    <div className={featuresection ? "image d-flex justify-content-center align-items-start" : 'image justify-content-center d-flex'}>
                        {featuresection ?
                            <img src={leptopimage} alt="" />
                            :
                            <img src={phoneimage} alt="" />
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
