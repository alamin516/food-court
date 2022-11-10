import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import HomeServiceCard from './HomeServiceCard';

const HomeServices = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('https://food-court-server.vercel.app/service-home')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div className='py-10'>
            <h1 className='text-center text-3xl font-bold mb-10'>Services</h1>
            <div className='grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    services.map(service => <HomeServiceCard
                        key={service._id}
                        service={service}
                    >
                    </HomeServiceCard>)
                }

            </div>
            <div className='mt-5 text-center' >
                <Link to='/services'><button className='btn bg-red-600 border-red-600 rounded-lg'>See All</button></Link>
            </div>
        </div>
    );
};

export default HomeServices;