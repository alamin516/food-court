import React from 'react';
import useTitle from '../../../hooks/useTitle';

const Services = () => {
    useTitle('Services')
    return (
        <div>
            <h1 className='text-center text-3xl font-bold mb-10'>Services</h1>
        </div>
    );
};

export default Services;