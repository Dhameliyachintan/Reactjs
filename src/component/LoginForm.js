// SignupForm.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


const LoginForm = () => {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const [errors, setErrors] = useState({});
    const [fetchedData, setFetchedData] = useState([]);


    const validateForm = () => {
        let errors = {};
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

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

    const fetchData = async () => {
        try {
            const response = await axios.get(`http://localhost:4000/form`);
            console.log(response.data);
            if (response.data) {
                setFetchedData(response.data);
            }
        } catch (error) {
            console.error("Error occurred during registration:", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);


    const handleSubmit = async (e) => {
        e.preventDefault();
        const isValid = validateForm(formData);

        if (isValid === false) {
            const userData = fetchedData.find(user => user.email === formData.email);
            if (!userData) {
                // console.log('invalid email');
                toast.error("invalid email");
                return;
            }

            if (userData.password !== formData.password) {
                // console.log('Incorrect password');
                toast.error("Incorrect password");
                return;
            }
            navigate("/Dashboard");
            toast.success("Login successfully");
        }
    };
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };
    
    // const handleclick = () => {
    //     navigate("/LoginForm")
    // }

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
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
                <br />
                <div className="button-container">
                    <button type="submit">Login</button>
                </div>
            </form>
        </div>
    );
};

export default LoginForm;

