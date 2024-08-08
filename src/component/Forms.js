import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { adddata, fetchData } from '../Redux/Form.action';
import { useNavigate } from "react-router-dom";


export default function Forms() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
    });
    const [errors, setErrors] = useState({});
    const dispatch = useDispatch()
    const navigate =  useNavigate()

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validateForm = () => {
        const newErrors = {};
        const nameRegex = /^[a-zA-Z\-]+$/;
        const passwordRegex = /^.{6,}$/;
        const emailRegex = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i;

        if (formData.name.trim() === '') {
            newErrors.name = 'Please enter a valid name';
        } else if (!formData.name.trim().match(nameRegex)) {
            newErrors.name =
                'name must be between 3 and 16 characters and can only contain letters, numbers, and underscores';
        }

        if (!formData.email.trim().match(emailRegex)) {
            newErrors.email = 'Invalid email address';
        }

        if (!formData.password.trim().match(passwordRegex)) {
            newErrors.password = 'Password must be at least 6 characters long';
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };




    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            dispatch(adddata(formData));
            navigate('/User')
        } else {
            console.log('Form has errors');
        }
    };

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     if (validateForm()) {
    //         localStorage.setItem('formData', JSON.stringify(formData));
    //     } else {
    //         console.log('Form has errors');
    //     }
    // };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>name:</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                    {errors.name && <span className="error">{errors.name}</span>}
                </div>
                <div>
                    <label>Email:</label>
                    <input
                        type="text"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    {errors.email && <span className="error">{errors.email}</span>}
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                    />
                    {errors.password && <span className="error">{errors.password}</span>}
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}
