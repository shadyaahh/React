import React, { useEffect, useState } from 'react'
import './Crud.css'

const Crud = () => {

    const [formData, setFormData] = useState({
        id: '',
        name: '',
        email: '',
        age: ''

    })

    const [users, setUsers] = useState([]);
    const [editMode, setEditMode] = useState(false);
    const [error, setError] = useState({});
    const [isloading, setIsLoading] = useState(false);


    //Load usrers from LOcal Storage - mount
    useEffect(() => {
        const stored = localStorage.getItem("users");
        if (stored) {
            try {
                const parsedUser = JSON.parse(stored);
                setUsers(parsedUser);
            } catch (error) {
                console.error("Error parsing data", error);
                localStorage.removeItem("users");//clear corrupted data

            }
        }
        setIsLoading(true); //mark as load
    }, [])


    //save users to Local storage

    useEffect(() => {
        if (isloading) {
            localStorage.setItem("users", JSON.stringify(users))
        }
    }, [users, isloading])


    //update formadDaata field dynamically as users types

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }


    //validation 
    const validate = () => {
        const newErrors = {};
        const { name, email, age } = formData;

        if (!name.trim()) newErrors.name = 'Name is required';

        if (!email) newErrors.email = 'Email is required';
        else if (!/^[a-zA-Z][a-zA-Z0-9._%+-]*@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) newErrors.email = 'Email is invalid';

        if (!age) newErrors.age = 'Age is required';
        else if (isNaN(age) || age < 1 || age > 120) newErrors.age = 'Age must be between 1 and 120';
        return newErrors;
    }

    //form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();

        if (Object.keys(validationErrors).length > 0) {
            setError(validationErrors);
            return;
        }


        if (editMode) {
            setUsers(users.map(user => user.id === formData.id ? formData : user));
            setEditMode(false);
        } else {
            const newUser = { ...formData, id: Date.now().toString() };
            setUsers([...users, newUser])
        }


        setFormData({
            id: '',
            name: '',
            email: '',
            age: ''

        });

        setError({});
    }
  
    const handleEdit = (user) => {
        setFormData(user);
        setEditMode(false);
    }


    return (
        <div className='formnew'>
            <h1>React CRUD - Simple From </h1>
            <form onSubmit={handleSubmit}>
                {/* name */}
                <div>
                    <input type="text" name="name" onChange={handleChange} value={formData.name} placeholder="your name" />
                    {error && <p style={{ color: 'red' }}>{error.name}</p>}
                </div>

                {/* email */}
                <div>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="your email" />
                    {error && <p style={{ color: 'red' }}>{error.email}</p>}

                </div>

                {/* age */}
                <div>
                    <input type="number" name="age" value={formData.age} onChange={handleChange} placeholder="your age" />
                    {error && <p style={{ color: 'red' }}>{error.age}</p>}

                </div>

                <button type='submit'>{editMode ? 'Upfdate users' : 'Add user'} </button>
            </form>

            editMode && (

            )

            <hr />

            <div style={{
                display: 'flex', justifyContent: 'space-between',
                alignitems: 'center', marginBottom: '10px'
            }}>
                <h2>User List</h2>
                {/* clear data button */}
            </div>


            {users.length > 0 ? (
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {users.map(Us => (
                            <tr key={Us.id}>
                                <td>{Us.name}</td>
                                <td>{Us.email}</td>
                                <td>{Us.age}</td>

                                <td>
                                    <button onClick={handleEdit(Us)}>Edit</button>
                                    <button style={{ marginLeft: '10px' }}>Delete</button>
                     
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p>NO users added yet.</p>
            )}
        </div>
    )
}

export default Crud
