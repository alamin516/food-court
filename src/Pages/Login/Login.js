import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { signIn, signInWithGoogle, forgetPassword } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const [loginError, setLoginError] = useState('')

    const from = location.state?.from?.pathname || '/';

    useTitle('Login')



    const handleLogin = data => {
        setLoginError('')
        signIn(data.email, data.password)
            .then(result => {
                toast.success('Successfully Login')
                navigate(from, { replace: true });
            })
            .catch(error => {
                setLoginError(error.message)
            })
    }


    const handleSignInWithGoogle = () => {
        signInWithGoogle()
            .then((result) => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true });
            })
            .catch(error => console.error(error))
    }

    const handlePassword = () => {
        const email = prompt('Enter your email');
        forgetPassword(email)
            .then(() => { })
            .catch(error => console.error(error))
    }


    return (
        <div className='min-h-screen flex justify-center items-center p-6'>
            <div className='lg:w-6/12 p-6 shadow-lg rounded-xl'>
                <h2 className='text-center text-xl'>Login</h2>
                <form className='mt-8' onSubmit={handleSubmit(handleLogin)}>
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
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" {...register("password", {
                            required: true,
                            minLength: {
                                value: 6,
                                message: "Password should more than 6 characters"
                            }})} placeholder="password" className="input input-bordered" />
                        {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                        <label className="label">
                            <Link onClick={handlePassword} className="label-text-alt link link-hover">Forgot password?</Link>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        {loginError && <p className='text-red-500'>{loginError}</p>}
                    </div>
                    <div className="form-control mt-6">
                        <button type="submit" className="btn btn-secondary">Login</button>
                    </div>
                </form>
                <div className='text-center'>
                    <p className='my-6'><Link className='text-primary' to='/signup'>Create new account</Link></p>
                    <div className="text-xl font-bold">OR</div>
                </div>
                <div className="form-control mt-6">
                    <button onClick={handleSignInWithGoogle} className="btn bordered-secondary text-black hover:bg-secondary hover:text-white bg-white">CONTINUE WITH GOOGLE</button>
                </div>

            </div>
        </div >
    );
};

export default Login;