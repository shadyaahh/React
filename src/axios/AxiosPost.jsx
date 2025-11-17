import axios from 'axios';
import React, { useState } from 'react'

const AxiosPost = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!name || !email) {
            setMessage('Both fields are required!');
            return
        }

        const userData = { name, email };
        try {
            const res = await axios.post('https://jsonplaceholder.typicode.com/users', userData);
            console.log(res.data);
            setMessage("Form submitted successfuly")

        } catch (error) {
            console.error(error);
            setMessage("Error submittiing user")
        }
    }
    return (
        <div>
            <h2>Submit User</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder='enter name'
                    value={name}
                    onChange={(e) => setName(e.target.value)} /> <br /><br />

                <input
                    type="email"
                    placeholder='Your email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} /> <br /><br />

                <button type='submit'>submit</button>

            </form>

            <p>{message}</p>
        </div>
    )
}

export default AxiosPost
