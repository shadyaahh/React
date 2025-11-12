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
   useEffect(() =>{
    if(stored){
        try {
            const parsedUser =JSON.parse(stored);
            setUsers(parsedUser);
        } catch (error) {
            console.error("Error parsing data" , error);
            localStorage.removeItem("users");//clear corrupted data

        }
    }
    setIsLoading(true); //mark as load
   },[])


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

    if(Object.keys(validationErrors).length > 0){
        setError(validationErrors);
        return;
    }


    //if (editMOde){
    // setUsers()
    //} else {
       // }

}

    return (
        <div className='formnew'>
            <h1>React CRUD - Simple From </h1>
            <FROM>
                {/* name */}
                <div>
                    <input type="text" name="name" onChange={handleChange} value={formData.name} placeholder="your name" />
                </div>

                {/* email */}
                <div>
                    <input type="email" name="eamil" value={formData.email} onChange={handleChange} placeholder="your email" />
                </div>

                {/* age */}
                <div>

                    <input type="number" name="age" value={formData.age} onChange={handleChange} placeholder="your age" />

                </div>

                <button type='submit'>{editMode ? 'Upfdate users' : 'Add user'} </button>
            </FROM>
        </div>
    )
}

export default Crud
