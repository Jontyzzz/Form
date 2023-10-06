    import React, { useState } from 'react';
    import { Link, useNavigate } from 'react-router-dom';
    import axios from 'axios';
    import Validation from './loginvalidation';

    function Login() {
        const [values, setValues] = useState({
            email: '',
            password: ''
        });
        const [error, setError] = useState({});
        const navigate = useNavigate();

        const handleChange = (event) => {
            setValues(prev => ({ ...prev, [event.target.name]: event.target.value }));
            setError(Validation({ ...values, [event.target.name]: event.target.value }));
        }

        const handleSubmit = (event) => {
            event.preventDefault();
            if (Object.keys(error).length === 0) {
                axios.post('http://localhost:8081/Login', values)
                    .then(res => {
                        if (res.data === "success") {
                            navigate('/home');
                        } else {
                            alert("NO RECORD EXISTED");
                        }
                    })
                    .catch(err => console.log(err));
            }
        }
    }

        return (
            <div className='Signup template d-flex justify-content-center w-100 vh-100 bg-primary justify-content-center align-items-center'>
                <div className='bg-white p-5 rounded bg-white'>
                    <form onSubmit={handleSubmit}>
                        <h2>Login</h2>
                        <div className='mb-3'>
                            <label htmlFor='email'><strong>Email</strong></label>
                            <input
                                type='email'
                                placeholder='Enter Email'
                                name='email'
                                className='form-control rounded-0'
                                onChange={handleChange}
                            />
                            {error.email && <span className='text-danger'>{error.email}</span>}
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='password'><strong>Password</strong></label>
                            <input
                                type='password'
                                placeholder='Enter password'
                                name='password'
                                className='form-control rounded-0'
                                onChange={handleChange}
                            />
                            {error.password && <span className='text-danger'>{error.password}</span>}
                        </div>
                        <p>You agree to the terms and conditions + policies</p>
                        <Link to='/Signup' className='btn btn-success w-100 rounded-0 text-decoration-none'>Create account</Link>
                    </form>
                </div>
            </div>
        );


    export default Login;
