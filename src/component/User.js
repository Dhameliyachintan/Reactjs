import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchData } from '../Redux/Form.action';
import { useNavigate } from 'react-router-dom';

export default function User() {
    const user = useSelector((state) => state.itemsdata.itemsdata)
    console.log("user", user);
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        dispatch(fetchData());
    }, []);

    const handleclick = (item) => {
        console.log(item);
        navigate(`/Editdata/${item.id}`);
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
                    {user.map(item => (
                        <tr key={item.id}>
                            <td>{item.username}</td>
                            <td>{item.email}</td>
                            <td>{item.password}</td>
                            <td>{item.productName}</td>
                            <button onClick={() => handleclick(item)}>Edit</button>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
