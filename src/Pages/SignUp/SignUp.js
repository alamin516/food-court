import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';

const SignUp = () => {
    const { createUser } = useContext(AuthContext);
    useTitle('Sign Up')

    const handleSubmit = (event) => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password)

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .catch(err => console.error(err))
    }

    return (
        <div className="hero py-10">
            <div className='lg:w-1/2'>
                <div className="shadow-2xl bg-base-100 w-75 rounded-lg pb-10">
                    <form onSubmit={handleSubmit} className="card-body">
                        <h1 className="text-3xl font-bold text-center">Sign Up</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input name='name' type="text" placeholder="name" className="input input-bordered rounded-lg" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name='email' type="text" placeholder="email" className="input input-bordered rounded-lg" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name='password' type="password" placeholder="password" className="input input-bordered rounded-lg" />
                            <label className="label">
                                <Link href="#" className="label-text-alt link link-hover">Forgot password?</Link>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-red-600 border-red-600 rounded-lg text-white">Sign Up</button>
                        </div>
                    </form>
                    <p className='text-center'>Already have an account? <Link to='/login' className='text-red-500'>Login</Link></p>

                </div>
            </div>
        </div>
    );
};

export default SignUp;