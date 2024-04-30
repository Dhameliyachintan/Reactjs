import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { addData, fetchData } from '../Redux/Action';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";

export default function Form() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        productName: '',
    });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validateForm()) {
            try {
                await dispatch(addData(formData));
                navigate("/Userlist");
            } catch (error) {
                console.error('Error submitting form:', error);
            }
        }
    };


    const validateForm = () => {
        const errors = {};
        const nameRegex = /^[a-zA-Z]+(?:\s[a-zA-Z]+)*$/;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;

        if (!formData.name.trim()) {
            errors.name = 'Name is required';
        } else if (!nameRegex.test(formData.name)) {
            errors.name = 'Invalid name format';
        }

        if (!formData.email || !formData.email.trim()) {
            errors.email = 'Email is required';
        } else if (!emailRegex.test(formData.email)) {
            errors.email = 'Invalid email format';
        }

        if (!formData.password || !formData.password.trim()) {
            errors.password = 'Password is required';
        } else if (!passwordRegex.test(formData.password)) {
            errors.password =
                'Password must be between 6 and 20 characters and contain at least one numeric digit, one uppercase, and one lowercase letter';
        }

        if (!formData.productName || !formData.productName.trim()) {
            errors.productName = 'Product Name is required';
        }

        setErrors(errors);
        return Object.keys(errors).length === 0;
    };



    return (
        <div>
            <h2>Form</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                    {errors.name && <div className="error">{errors.name}</div>}
                </div>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    {errors.email && <div className="error">{errors.email}</div>}
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                    />
                    {errors.password && <div className="error">{errors.password}</div>}
                </div>
                <div>
                    <label>Product Name:</label>
                    <input
                        type="text"
                        name="productName"
                        value={formData.productName}
                        onChange={handleChange}
                    />
                    {errors.productName && (
                        <div className="error">{errors.productName}</div>
                    )}
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}
