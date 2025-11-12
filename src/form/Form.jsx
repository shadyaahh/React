import React, { useState } from 'react'
import './Form.css';

const Form = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        age: '',
        password: '',
        confirmPassword: '',
        gender: ''

    });


    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target; // called everytime when a user type or change a form field
        setFormData(prev => ({
            ...prev, // uses spread operator to keep other value unchanged.
            [name]: value
        }))
    }


    const validate = () => {
        const newErrors = {};
        const { name, email, age, password, confirmPassword, gender } = formData;

        if (!name.trim()) newErrors.name = 'Name is required';

        if (!email) newErrors.email = 'Email is required';
        else if (!/^[a-zA-Z][a-zA-Z0-9._%+-]*@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) newErrors.email = 'Email is invalid';

        if (!age) newErrors.age = 'Age is required';
        else if (isNaN(age) || age < 1 || age > 120) newErrors.age = 'Age must be between 1 and 120';

        if (!password) newErrors.password = 'Password required'
        else if (password.length < 6) newErrors.password = 'Password need 6 characters atleast';


        if (!confirmPassword) newErrors.confirmPassword = 'Confirm your password';
        else if (password !== confirmPassword) newErrors.confirmPassword = ' Password do not match ';

        if (!gender) newErrors.gender = 'Gender required';



        return newErrors;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const validateErrors = validate();

        if (Object.keys(validateErrors).length > 0) {  // [ 'name', "email", .....]
            setErrors(validateErrors);

        } else {
            setErrors({});
            alert('Form submitted succesfully');
            console.log('Form Data :', formData);

            // clear form field after succesfull submission
            setFormData({
                name: '',
                email: '',
                age: '',
                password: '',
                confirmPassword: '',
                gender: ''

            });
        }
    }


    return (
        <form onSubmit={handleSubmit}>
            <div>
                <input type="text" name='name' value={formData.name} onChange={handleChange} placeholder='enter your name' />
                {errors.name && <p style={{ color: 'red' }} >{errors.name}</p>}
            </div>
            <div>
                <input type="email" name='email' value={formData.email} onChange={handleChange} placeholder='enter your email' />
                {errors.email && <p style={{ color: 'red' }}> {errors.email}</p>}
            </div>

            <div>
                <input type="number" name='age' value={formData.age} onChange={handleChange} placeholder='enter your age' />
                {errors.age && <p style={{ color: 'red' }}>{errors.age}</p>}
            </div>
            <div>
                <input type="password" name='password' value={formData.password} onChange={handleChange} placeholder='enter password' />
                {errors.password && <p style={{ color: 'red' }} >{errors.password}</p>}
            </div>

            <div>
                <input type="password" name='confirmPassword' value={formData.confirmPassword} onChange={handleChange} placeholder='enter confirm password' />
                {errors.confirmPassword && <p style={{ color: 'red' }}>{errors.confirmPassword}</p>}
            </div>

            <div>
                <label>
                    <input type="radio" name='gender' value='male' onChange={handleChange} checked={formData.gender === 'male'} /> Male
                </label>
                <label>
                    <input type="radio" name='gender' value='female' onChange={handleChange} checked={formData.gender === 'female'} /> Female
                </label>
                <label>
                    <input type="radio" name='gender' value='others' onChange={handleChange} checked={formData.gender === 'others'} /> Others
                </label>

                {errors.gender && <p style={{ color: 'red' }} >{errors.gender}</p>}
            </div>

            <div>
                <button type="submit">Submit</button>
            </div>
        </form>
    );
};

export default Form;