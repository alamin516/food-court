import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../../hooks/useTitle';
import Loading from '../../../Shared/Loading/Loading';
import ServicesCard from './ServiceCard/ServiceCard';

const Services = () => {
    const [services, setServices] = useState([])
    const { loading } = useContext(AuthContext);
    useTitle('Services')


    useEffect(() => {
        fetch('https://food-court-server.vercel.app/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    if (loading) {
        return <Loading></Loading>
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