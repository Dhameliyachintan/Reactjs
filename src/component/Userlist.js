import React, { useEffect } from 'react';
import { deleteData, fetchData, updateData } from '../Redux/Action'; // Assuming updateData action is imported
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";

export default function Userlist() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const items = useSelector(state => state.items.items);

    useEffect(() => {
        dispatch(fetchData());
    }, []);

    const handleEdit = async (id) => { 
        try {
            console.log("id", id);
            await dispatch(updateData(id));
            navigate(`/Edit/${id}`);
        } catch (error) {
            console.error('Error editing data:', error);
        }
    }

    const handleDelete = (id) => {
        console.log("id", id);
        dispatch(deleteData(id))
    }

    return (
        <div>
            <h2>User List</h2>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Password</th>
                        <th>ProductName</th>
                        <th>Edit</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map(item => (
                        <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.password}</td>
                            <td>{item.productName}</td>
                            <td>
                                <button onClick={() => handleEdit(item.id)}>Edit</button> {/* Pass item.id to handleEdit */}
                                <button onClick={() => handleDelete(item.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
