import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deletedata, fetchData } from '../Redux/Form.action';
import { useNavigate } from 'react-router-dom';

export default function User() {
    const user = useSelector((state) => state.itemsdata.itemsdata)
    console.log("user", user);
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        dispatch(fetchData());
    }, []);

    const handleClick = (item) => {
        console.log(item);
        navigate(`/Editdata/${item.id}`, { state: { formData: item } });
    }

    const handleClickDelete = (id) => {
        console.log(id);
        dispatch(deletedata(id))
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
                        <th>Edit</th>
                    </tr>
                </thead>
                <tbody>
                    {user.map(item => (
                        <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.password}</td>
                            <button onClick={() => handleClick(item)}>Edit</button>
                            <button onClick={() => handleClickDelete(item.id)}>data</button>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}