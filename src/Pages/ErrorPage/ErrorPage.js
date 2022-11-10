import React from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';

const ErrorPage = () => {
    useTitle('404 page')
    return (
        <div className="hero min-h-screen w-full">
            <div className="hero-content text-center shadow-lg w-1/2">
                <div className="max-w-lg">
                    <h1 className="text-8xl font-bold mb-4">404</h1>
                    <Link to='/'><button className="btn btn-primary">Retutn Home</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;