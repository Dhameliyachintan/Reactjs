import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ProductDetails() {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevValue => ({
            ...prevValue,
            [name]: value
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const existingFormData = JSON.parse(localStorage.getItem("formData")) || [];
        localStorage.setItem("formData", JSON.stringify([...existingFormData, formData]));
        setFormData(formData);
        navigate("/Productdetailsdata");
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="First Name"
                    value={formData.name}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="email"
                    placeholder="email"
                    value={formData.email}
                    onChange={handleChange}
                />
                <input
                    type="password"
                    name="password"
                    placeholder="password"
                    value={formData.password}
                    onChange={handleChange}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default ProductDetails;
