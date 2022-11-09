import React from 'react';

const Login = () => {


    return (
        <div className="hero bg-base-200 py-10">
            <div className='lg:w-1/2'>
                <div className="shadow-2xl bg-base-100 w-75 rounded-lg">
                    <form className="card-body">
                        <h1 className="text-3xl font-bold">Login now!</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" className="input input-bordered rounded-lg" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" placeholder="password" className="input input-bordered rounded-lg" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-red-600 rounded-lg">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;