import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


const SignupForm = () => {
    const navigate = useNavigate(); // Hook for navigation
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const [errors, setErrors] = useState({});

    const validateForm = () => {
        let errors = {};
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const nameRegex = /^[a-zA-Z\s]*$/; // Regex for alphabets and spaces only

        if (!formData.name.trim()) {
            errors.name = 'Name is required';
        } else if (!nameRegex.test(formData.name)) {
            errors.name = 'Invalid name';
        }

        if (!emailRegex.test(formData.email)) {
            errors.email = 'Invalid email address';
        }

        if (formData.password.length < 8) {
            errors.password = 'Password must be at least 8 characters';
        }

        if (formData.password !== formData.confirmPassword) {
            errors.confirmPassword = 'Passwords do not match';
        }

        setErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const isValid = validateForm(formData);
        
        if (isValid === true) {
            const userDataObject = {
                name: formData.name,
                email: formData.email,
                password: formData.password,
            };
            
            try {
                const response = await axios.post("http://localhost:4000/form", userDataObject);
                toast.success("Signup successful");
                console.log(response.status, response.data);
                navigate('/LoginForm');
            } catch (error) {
                console.error("Error occurred during registration:", error);
                toast.error("Error occurred during registration");
            }
        } else {
            toast.error("Please fix the errors in the form");
        }
    };


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <div className="input-group">
                    <label>Name</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Name"
                    />
                    {errors.name && <span className="error-message">{errors.name}</span>}
                </div>
                <div className="input-group">
                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email"
                    />
                    {errors.email && <span className="error-message">{errors.email}</span>}
                </div>
                <div className="input-group">
                    <label>Password</label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Password"
                    />
                    {errors.password && <span className="error-message">{errors.password}</span>}
                </div>
                <div className="input-group">
                    <label>Confirm Password</label>
                    <input
                        type="password"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        placeholder="Confirm Password"
                    />
                    {errors.confirmPassword && <span className="error-message">{errors.confirmPassword}</span>}
                </div>
                <div className="button-container">
                    <button type="submit">Sign Up</button>
                </div>
            </form>
        </div>
    );
};

export default SignupForm;
