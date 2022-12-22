import React, { useContext } from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';

const SignUp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { createUser, updateUser, signInWithGoogle } = useContext(AuthContext);
    const [error, setError] = useState('')
    const location = useLocation();
    const navigate = useNavigate();
    useTitle('Sign Up')

    let from = location.state?.from?.pathname || "/";


    const handleSignUp = data => {
        setError('')
        
        createUser(data.email, data.password)
        .then(result => {
            const user = result.user;
            console.log(user)
            usernameUpdate(data.name)
            toast('Successfully Created')
            navigate(from, { replace: true })
        })
        .catch(err => {
            console.error(err)
            alert(err)
        })

        
    }

    const usernameUpdate = (name) => {
        updateUser({
            displayName: name
        })
            .then()
            .catch(error => alert(error))
    }

    const handleSignInWithGoogle = () => {
        signInWithGoogle()
            .then((result) => {
                const user = result.user;
                console.log(user);
                navigate('/')
            })
            .catch(error => console.error(error))
    }

    return (
        <div className='min-h-screen flex justify-center items-center p-6'>
            <div className='lg:w-6/12 p-6 shadow-lg rounded-xl'>
                <h2 className='text-center text-xl'>Sign Up</h2>
                <form className='mt-8' onSubmit={handleSubmit(handleSignUp)}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" {...register("name", {
                            required: 'Name is required'

                        })} placeholder="name" className="input input-bordered" />
                        {errors.name && <p className='text-red-600'>{errors.name?.message}</p>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" {...register("email", {
                            required: 'Email Address is required'

                        })} placeholder="email" className="input input-bordered" />
                        {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Phone Number</span>
                        </label>
                        <input type="tel" {...register("phone", {
                            required: 'Phone Number is required'

                        })} placeholder="phone" className="input input-bordered" />
                        {errors.phone && <p className='text-red-600'>{errors.phone?.message}</p>}
                    </div>
                    
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" {...register("password",
                            {
                                required: 'Password is required',
                                minLength: {
                                    value: 6,
                                    message: 'Password must be at least 6 characters'
                                },
                            })} placeholder="password" className="input input-bordered" />
                        {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                    </div>
                    <label className="label">
                        {error && <span className="label-text text-red-500">{error}</span>}
                    </label>
                    <div className="form-control mt-6">
                        <button type="submit" className="btn btn-secondary">Sign Up</button>
                    </div>
                </form>
                <div className='text-center'>
                    <p className='my-6'>Already have an account? <Link className='text-primary' to='/login'>Please login</Link></p>
                    <div className="text-xl font-bold">OR</div>
                </div>
                <div className="form-control mt-6">
                    <button onClick={handleSignInWithGoogle} className="btn bordered-secondary text-black hover:bg-secondary hover:text-white bg-white">CONTINUE WITH GOOGLE</button>
                </div>
            </div>
        </div >
        
    );
};

export default SignUp;