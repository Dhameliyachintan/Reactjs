import React, { useEffect, useState } from 'react';

export default function Prodectdetailsdata() {
    const [formdata, setFormData] = useState([]);
    const [editFormData, setEditFormData] = useState(null);
    const [editIndex, setEditIndex] = useState(null);

    useEffect(() => {
        const formDataString = localStorage.getItem("formData");
        if (formDataString) {
            const parsedFormData = JSON.parse(formDataString);
            setFormData(parsedFormData);
        }
    }, []);

    const handleDeleteItem = (index) => {
        const updatedFormSubmissions = [...formdata];
        updatedFormSubmissions.splice(index, 1);
        localStorage.setItem("formData", JSON.stringify(updatedFormSubmissions));
        setFormData(updatedFormSubmissions);
    };

    const handleEditItem = (index) => {
        setEditFormData(formdata[index]);
        setEditIndex(index);
    };

    const handleSaveEdit = () => {
        const updatedFormData = [...formdata];
        updatedFormData[editIndex] = editFormData;
        localStorage.setItem("formData", JSON.stringify(updatedFormData));
        setFormData(updatedFormData);
        setEditFormData(null);
        setEditIndex(null);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditFormData(prevValue => ({
            ...prevValue,
            [name]: value
        }));
    }

    return (
        <div>
            {editFormData ? (
                <div>
                    <h2>Edit Form Submission</h2>
                    <form>
                        <label htmlFor="editName">Name:</label>
                        <input
                            type="text"
                            name="name"
                            placeholder="First Name"
                            value={editFormData.name}
                            onChange={handleChange}
                        />
                        <label htmlFor="editEmail">Email:</label>
                        <input
                            type="text"
                            name="email"
                            placeholder="Email"
                            value={editFormData.email}
                            onChange={handleChange}
                        />
                        <label htmlFor="editPassword">Password:</label>
                        <input
                            type="password"
                            name="password"
                            placeholder="password"
                            value={editFormData.password}
                            onChange={handleChange}
                        />
                        <button type="button" onClick={handleSaveEdit}>save</button>
                    </form>
                </div>
            ) : (
                <div>
                    {formdata.length > 0 ? (
                        <div>
                            <h2>All Form Submissions</h2>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Password</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {formdata.map((formData, index) => (
                                        <tr key={index}>
                                            <td>{formData.name}</td>
                                            <td>{formData.email}</td>
                                            <td>{formData.password}</td>
                                            <td>
                                                <button onClick={() => handleEditItem(index)}>Edit</button>
                                                <button onClick={() => handleDeleteItem(index)}>Delete</button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    ) : (
                        <p>No form submissions found.</p>
                    )}
                </div>
            )}
        </div>
    );
}
