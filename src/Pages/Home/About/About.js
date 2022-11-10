import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import img from '../../../assets/images/about/chef.jpg'
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const About = () => {
    const { user } = useContext(AuthContext)
    return (
        <div className="carousel-item relative w-full">
            <div>
                <img src={img} className="bg-blend-difference" alt='' />
            </div>
            <div className="absolute  transform -translate-y-1/2 right-24 bottom-0 top-1/2 lg:w-2/5">
                <h1 className='lg:text-6xl text-xl font-semibold text-white'>
                    Food is About People
                </h1>
                <div className='mt-8'>
                    <p className='text-white'>At Sysco, we want to be your most valued and trusted business partner. We aim to exceed your expectations and deliver shipments as ordered. Sysco invests in your success at every level.</p>
                </div>

                <div className='mt-8'>
                    {
                        user?.uid ? <Link to='/services'><button className="btn btn-warning mr-5">Services</button></Link> : <Link to='/signup'><button className="btn btn-warning mr-5">Become a cutomer</button></Link>
                    }
                </div>
            </div>

        </div>
    );
};

export default About;