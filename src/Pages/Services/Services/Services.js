import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../../hooks/useTitle';
import ServicesCard from './ServiceCard/ServiceCard';

const Services = () => {
    const [services, setServices] = useState([])
    const { loading } = useContext(AuthContext);

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])



    useTitle('Services')

    if (loading) {
        return <div className='min-h-screen flex justify-center'>
            <div>
                <button type="button" className="bg-indigo-500 ...">
                    <svg className="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">
                    </svg>
                    Loading...
                </button>
            </div>
        </div>
    }
    return (
        <div>
            <h1 className='text-center text-3xl font-bold mb-10'>Services</h1>
            <div className='grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    services.map(service => <ServicesCard
                        key={service._id}
                        service={service}
                    >
                    </ServicesCard>)
                }
            </div>
        </div>
    );
};

export default Services;