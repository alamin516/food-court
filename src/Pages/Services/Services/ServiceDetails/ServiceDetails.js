import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { useQuery } from 'react-query';
import { Link, Navigate, useLoaderData, useLocation } from 'react-router-dom';
import { AuthContext } from '../../../../contexts/AuthProvider/AuthProvider';
import Loading from '../../../../Shared/Loading/Loading';
import DisplayReview from './DisplayReview';

const ServiceDetails = () => {
    const service = useLoaderData();
    const { user } = useContext(AuthContext)
    const { _id, title, img, price, rating, description } = service;
    const location = useLocation();


    const handleReview = event => {
        event.preventDefault();
        const form = event.target;
        const text = form.text.value;

        const review = {
            service: _id,
            serviceName: title,
            price,
            email: user.email,
            name: user.displayName,
            img,
            text,
            rating,
        }

        fetch('https://food-court-server.vercel.app/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged === true) {
                    toast("Review added successfully")
                    form.reset();
                    refetch()
                    return <Navigate to="/login" state={{ from: location }} replace></Navigate>
                }
            })
            .catch(err => console.error(err))

    }

    const { data: reviews = [], isLoading, refetch } = useQuery({
        queryKey: ['reviews', _id],
        queryFn: async () => {
            const res = await fetch(` https://food-court-server.vercel.app/reviews/service?service=${_id}`);
            const data = await res.json();
            return data
        }
    })


    if(isLoading){
        return <Loading></Loading>
    }

    return (
        <div className='py-10'>
            <div className='lg:flex mb-10'>
                <div className='lg:w-1/2'>
                    <PhotoProvider>
                        <PhotoView src={img}>
                            <img src={img} alt="" />
                        </PhotoView>
                    </PhotoProvider>
                </div>
                <div className='lg:w-1/2'>
                    <h2 className='text-3xl font-bold mb-5'>{service.title}</h2>
                    <h3 className='text-2xl font-semibold mb-5'>Price: <span className='text-red-600'>${price}</span></h3>
                    <p className='mb-5'>{description.slice(0, 120)}...</p>
                    <p className='lg:mb-20 mb-5'>Rating: {rating}</p>
                </div>
            </div>

            <h1 className='text-3xl font-bold mb-10'>Reviews</h1>
            <table className="table w-full">
                <tbody>
                    {
                        user?.uid && reviews.map(review => <DisplayReview
                            key={review._id}
                            review={review}
                        >
                        </DisplayReview>)
                    }
                </tbody>
            </table>
            <hr />
            <div>
                <form onSubmit={handleReview}>
                    <h2 className='text-3xl my-5'>{title}</h2>
                    <h4 className='text-xl'>Price: ${price}</h4>
                    <input name='text' className="input input-bordered h-24 w-full my-4" placeholder='Type Your Review Here' required />
                    {
                        user?.uid ? <button type="submit" className='btn my-2'> Review</button> :
                            <Link to='/login'><button type="submit" className='btn my-2'> Review</button></Link>

                    }
                </form>
            </div>
        </div>
    );
};

export default ServiceDetails;