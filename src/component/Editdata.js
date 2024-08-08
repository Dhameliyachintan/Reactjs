import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { updatedata } from '../Redux/Form.action'; // Import your CSS file

export default function Edit() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const { formData } = location.state;
    const [formState, setFormState] = useState(formData);

    useEffect(() => {
        if (!formData) {
            navigate('/User');
        }
    }, [formData, navigate]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormState(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updatedata(formState, formState.id));
        navigate('/User');
    };

    return (
        <div className="edit-form-container"> {/* Apply CSS class for container */}
            <h2>Edit Form</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group"> {/* Apply CSS class for form group */}
                    <label>Name:</label>
                    <input
                        className="form-control"
                        type="text"
                        name="name"
                        value={formState.name || ''}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label>Email:</label>
                    <input
                        className="form-control"
                        type="email"
                        name="email"
                        value={formState.email || ''}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label>Password:</label>
                    <input
                        className="form-control"
                        type="password"
                        name="password"
                        value={formState.password || ''}
                        onChange={handleChange}
                    />
                </div>
                <button className="btn-submit" type="submit">Submit</button> {/* Apply CSS class for button */}
            </form>
        </div>
    );
}
