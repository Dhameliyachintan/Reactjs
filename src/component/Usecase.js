import React, { useState } from 'react';
import { Carousel, Tab, Nav } from 'react-bootstrap';
import { links, menuItems, usercaseslider } from '../constant';

export default function Usecase() {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div className='usecase'>
            <div className="container">
                <Tab.Container activeKey={activeTab} onSelect={(key) => setActiveTab(key)}>
                    <Nav variant="tabs" className="usecase-menu border-0 d-flex justify-content-center align-items-center">
                        {menuItems.map((item, index) => (
                            <Nav.Item key={index}>
                                <Nav.Link
                                    eventKey={index}
                                    className={`swiper-pagination-bullet border-0 ${activeTab === index ? 'active' : ''}`}
                                    style={{ backgroundColor: activeTab === index ? 'blue' : 'white' }}
                                    onClick={() => setActiveTab(index)} // Set activeTab when the button is clicked
                                >
                                    {item}
                                </Nav.Link>
                            </Nav.Item>
                        ))}
                    </Nav>
                    <Tab.Content>
                        {menuItems.map((item, index) => (
                            <Tab.Pane key={index} eventKey={index}>
                                <Carousel>
                                    {usercaseslider.map((sliderItem) => (
                                        <Carousel.Item key={sliderItem.id}>
                                            <div className="row mt-5">
                                                <div className="col-md-6">
                                                    <img
                                                        className="d-block w-100"
                                                        src={sliderItem.image}
                                                        alt="Slider Image"
                                                    />
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="slider-menu">
                                                        <h2>{sliderItem.h2}</h2>
                                                        <p>{sliderItem.p}</p>
                                                        <h5>{sliderItem.h5}</h5>
                                                    </div>
                                                    <ul>
                                                        {links.map((link, index) => (
                                                            <li key={index}>
                                                                <a className='text-decoration-none text-black' href="#">{link}</a>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
                                        </Carousel.Item>
                                    ))}
                                </Carousel>
                            </Tab.Pane>
                        ))}
                    </Tab.Content>
                </Tab.Container>
            </div>
        </div>
    );
}
