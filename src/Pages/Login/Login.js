import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';

const Login = () => {
    const { signIn, signInWithGoogle } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    useTitle('Login')

    const handleSubmit = (event) => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, {replace: true})
            })
            .catch(err => console.error(err))
    }

    const handleGoogle = () => {
        signInWithGoogle()
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(err => console.error(err))
    }

    return (
        <div className="hero py-10">
            <div className='lg:w-1/2'>
                <div className="shadow-2xl bg-base-100 w-75 rounded-lg py-10">
                    <form onSubmit={handleSubmit} className="card-body">
                        <h1 className="text-3xl font-bold text-center">Login</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name='email' type="email" placeholder="email" className="input input-bordered rounded-lg" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name='password' type="password" placeholder="password" className="input input-bordered rounded-lg" />
                            <label className="label">
                                <Link to='/' className="label-text-alt link link-hover">Forgot password?</Link>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-red-600 border-red-600 rounded-lg text-white">Login</button>
                        </div>
                    </form>
                    <p className='text-center mb-2'>Create a new account? <Link to='/signup' className='text-red-500'>Sign Up</Link></p>
                    <h1 className="text-xl font-bold text-center mb-2">OR</h1>
                    <div className="text-center">
                        <button onClick={handleGoogle} className="btn bg-blue-600 rounded-lg border-blue-600 text-white">Google</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;