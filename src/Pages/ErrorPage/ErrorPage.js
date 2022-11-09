import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content text-center shadow-lg">
                <div className="max-w-md">
                    <h1 className="text-8xl font-bold mb-4">404</h1>
                    <Link to='/'><button className="btn btn-primary">Retutn Home</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;